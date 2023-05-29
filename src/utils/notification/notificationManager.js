import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';
import { StatusError } from '../../config/StatusErrors.js';
import { envs } from '../../config/envs.js';
import { Cache } from '../cache/cacheUtil.js';
import { SEPARATOR } from '../constants.js';
import FileUtil from '../files/FileUtil.js';
import { replaceContent } from '../replaceContent.js';

import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';

export class NotificationManager {
	static #instance;
	#axiosInstance = null;
	#cacheService = null;
	#token_url = 'https://auth.supersms.co:7000/auth/v3/token';
	#file_url = 'https://file.supersms.co:7010/sms/v3/file';
	#send_sms_url = 'https://sms.supersms.co:7020/sms/v3/multiple-destinations';
	#replaceWordKey = 'replaceWord';
	#sms_cache_key = 'SEND_SMS_CONFIG';

	constructor() {
		//if already instance exists
		if (NotificationManager.#instance) return this;

		// Initiate Cache Service
		this.#cacheService = new Cache();
		// Create a axios instance
		this.#axiosInstance = axios.create();
		// Request interceptor for API calls
		this.#axiosInstance.interceptors.request.use(
			async (config) => {
				const tokenData = await this.getToken();
				config.headers = {
					Authorization: `${tokenData.schema} ${tokenData.accessToken}`,
					Accept: 'application/json',
				};
				return config;
			},
			(error) => {
				Promise.reject(error);
			}
		);
		// Response interceptor for API calls
		this.#axiosInstance.interceptors.response.use(
			(response) => {
				return response;
			},
			async function (error) {
				const originalRequest = error.config;
				if (
					(error?.response?.status === 403 ||
						error?.response?.status === 401) &&
					!originalRequest._retry
				) {
					originalRequest._retry = true;
					const tokenData = await this.getToken();
					axios.defaults.headers.common[
						'Authorization'
					] = `${tokenData.schema} ${tokenData.accessToken}`;
					return this.#axiosInstance(originalRequest);
				}
				return Promise.reject(error);
			}
		);

		//set the instance for next time
		NotificationManager.#instance = this;
	}

	static getInstance() {
		if (NotificationManager.#instance) return NotificationManager.#instance;
		return new NotificationManager();
	}

	/**
	 * Convert normal text to API suitable text
	 * @param {string} text text which needs to be updated
	 * @author Rakesh Chandra Dash
	 */
	static convertToAPITextFormat = (text) => {
		if (!text) return;
		const formatData = [];
		for (let index = 1; index <= 5; index++) {
			formatData.push({
				name: `variable_0${index}`,
				value: `%CHANGEWORD${index}%`,
				startSeparator: SEPARATOR.notoficationStartSeparator,
				endSeparator: SEPARATOR.notoficationEndSeparator,
			});
		}
		return replaceContent(formatData, text);
	};

	/**
	 * Manage Access Token
	 * @author Rakesh Chandra Dash
	 */
	getToken = async () => {
		const resp = this.#cacheService.cache.get(this.#sms_cache_key);
		if (!resp) {
			const tokenData = await this.fetchToken();
			this.#cacheService.set(this.#sms_cache_key, tokenData);
			return tokenData;
		}
		return resp;
	};
	/**
	 * Fetch Access Token
	 * @author Rakesh Chandra Dash
	 */
	fetchToken = async () => {
		const response = await axios.post(
			this.#token_url,
			{},
			{
				headers: {
					'X-IB-Client-Id': envs.sms.clientId,
					'X-IB-Client-Passwd': envs.sms.clientPassword,
					Accept: 'application/json',
				},
			}
		);

		return response.data;
	};
	/**
	 * Get the key and expiry date of the file needs to upload
	 * @param {string} path Full path of the file
	 * @author Rakesh Chandra Dash
	 */
	getFileKey = async (path) => {
		const linuxPath = FileUtil.setPathAsLinux(path);
		const formData = new FormData();
		formData.append('fileData', fs.createReadStream(linuxPath));
		const response = await this.#axiosInstance.post(
			this.#file_url,
			formData,
			{
				headers: {
					Accept: 'application/json',
					...formData.getHeaders(),
				},
			}
		);
		console.log(response);
		return response.data;
	};
	/**
	 * Send sms
	 * @param {string} title Title of the sms
	 * @param {string} text Description of the sms
	 * @param {string} from Sender Number(With country code)
	 * @param {array of objects} destinations user and variable details
	 * @param {string} Full path of the file
	 * @author Rakesh Chandra Dash
	 */
	sendSMS = async ({
		title,
		text,
		from,
		destinations = [],
		filePath,
		...otherConfig
	}) => {
		try {
			if (!text || !from || destinations.length === 0) {
				throw new Error('insufficientData');
			}

			let file = null;
			const formatedText =
				NotificationManager.convertToAPITextFormat(text);
			if (filePath) {
				file = await this.getFileKey(FileUtil.setPathAsLinux(filePath));
			}
			const body = {
				title,
				text: formatedText,
				from,
				destinations: destinations
					.filter((item) => !!item && item.constructor === Object)
					.map((item) => {
						const obj = {};
						for (const [key, value] of Object.entries(item)) {
							if (key.startsWith('variable')) {
								obj[
									`${this.#replaceWordKey}${key.slice(
										key.length - 1
									)}`
								] = value;
							} else {
								obj[key] = value;
							}
						}
						return obj;
					}),
				...otherConfig,
			};

			if (file) {
				body.fileKey = file.fileKey;
			}
			const response = await this.#axiosInstance.post(
				this.#send_sms_url,
				body,
				{
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
					},
				}
			);
			//console.log(response.data);
			return response.data;
			// return body;
		} catch (error) {
			let message = '';
			if (error.response) {
				console.log(error.response.data);
				message =
					error.response.data?.errorText ?? 'unable to send message';
			} else {
				message = error.message;
			}
			throw StatusError.badRequest(message);
		}
	};

	/**
	 * Prepare template for email
	 * @param {string} templateContent Template for the email
	 * @param {string} tempKeyVal Key Value pair for the template
	 * @author Bratati Dutta
	 */
	prepareTemplate = (templateContent, tempKeyVal = {}) => {
		const formatData = [];
		for (const [key, value] of Object.entries(tempKeyVal)) {
			formatData.push({
				name: key,
				value: value,
				startSeparator: SEPARATOR.notoficationStartSeparator,
				endSeparator: SEPARATOR.notoficationEndSeparator,
			});
		}
		return replaceContent(formatData, templateContent);
	};

	/**
	 * Send email
	 * @param {string} emailTo Email of the user
	 * @param {string} title Title of the mail
	 * @param {string} templateContent Template for the email
	 * @param {object} tempKeyVal Key Value pair for the template
	 * @param {array of objects} attachments Attachments for the email
	 * @param {string} emailFrom Sender Email
	 */
	sendMail = async (emailParams = {}) => {
		const {
			emailTo,
			title,
			templateContent,
			tempKeyVal = [],
			attachments,
			emailFrom,
		} = emailParams;
		if (!emailTo) return null;
		const emailContent = this.prepareTemplate(templateContent, tempKeyVal);
		if (emailContent) {
			//handled too may connection
			const extraConfig =
				envs.smtp.secure === false
					? {
							pool: true, // use pooled connection
							rateDelta: 20000,
							rateLimit: 5, // enable to make sure we are limiting
							maxConnections: 1, // set limit to 1 connection only
							maxMessages: 3, // send 3 emails per second
					  }
					: {};
			const transport = nodemailer.createTransport(
				smtpTransport({
					host: envs.smtp.host,
					port: +envs.smtp.port,
					secure: envs.smtp.secure,
					auth: {
						user: envs.smtp.email,
						pass: envs.smtp.password,
					},
					...extraConfig,
				})
			);

			const mailInfo = {
				from: emailFrom ?? String(envs.smtp.fromEmail),
				to: emailTo,
				subject: title,
				html: emailContent,
				attachments: attachments?.map(({ fileName, filePath }) => {
					return { filename: fileName, path: filePath };
				}),
			};

			const info = await transport.sendMail(mailInfo);
			return info.messageId;
		}
		return null;
	};
}
