import fs from 'fs';
import { CustomDate } from '../date/customDate.js';
import { StatusError } from './../../config/StatusErrors.js';
import { envs } from './../../config/index.js';

export default class FileUtil {
	static remove(filePaths) {
		try {
			if (!Array.isArray(filePaths)) filePaths = [filePaths];
			const resultPaths = [];
			for (let path of filePaths) {
				if (!path) continue;
				if (!path.startsWith(envs.uploadPath))
					path = FileUtil.getFilePathFromUrlPath(path); // a path is supposed to be either full path(most of the modules) or path without root(edit supply company at admin) directory as of now.
				if (fs.existsSync(path)) fs.unlinkSync(path);
				resultPaths.push(path);
			}
			if (resultPaths.length > 0)
				console.log(`deleted files: ${resultPaths}`);
			return resultPaths;
		} catch (error) {
			throw StatusError.serverError(error);
		}
	}

	static removeFile(file) {
		try {
			const { destination, filename } = file;
			const path = `${destination}/${filename}`;
			if (fs.existsSync(path)) fs.unlinkSync(path);
			console.log(`deleted file: ${path}`);
		} catch (error) {
			throw StatusError.serverError(error);
		}
	}

	static getFilePathFromUrlPath(fileFullPath) {
		try {
			return String(fileFullPath).slice(
				fileFullPath.indexOf(envs.uploadPath)
			);
		} catch (error) {
			throw StatusError.serverError(error);
		}
	}

	static getFilePathWithName(filename) {
		if (String(filename).startsWith(`${envs.uploadPath}`)) return filename;
		return `${
			envs.uploadPath
		}/${new CustomDate().getCurrentDateWithoutHypen()}/${String(filename)}`;
	}

	static getFileURL(req, file) {
		if (!file) return null;
		return `${req.protocol}://${req.headers.host}/${String(file).replaceAll(
			'\\',
			'/'
		)}`;
	}

	static getFileDownloadURL(req, file, original_name) {
		if (!file || !original_name) return null;
		const protocol = String(req.headers.host).includes('localhost')
			? 'http'
			: 'https';
		const replacedPath = String(file).replaceAll('\\', '/');
		return `${protocol}://${req.headers.host}/api/v1/user/download-file/${replacedPath}?original_name=${original_name}`;
	}

	static getFileURLWithPath(req, path) {
		const protocol = String(req.headers.host).includes('localhost')
			? 'http'
			: 'https';
		return `${protocol}://${req.headers.host}/${String(path).replaceAll(
			'\\',
			'/'
		)}`;
	}

	static setPathAsLinux(path) {
		if (!path) return null;
		return String(path).replaceAll('\\', '/') ?? null;
	}

	static getFileOriginalName(file) {
		return String(file?.originalname) ?? null;
	}

	static getDirectoryOrGenerate(extraDirectory = null) {
		let directory;
		if (extraDirectory)
			directory = `${
				envs.uploadPath
			}/${extraDirectory}/${new CustomDate().getCurrentDateWithoutHypen()}`;
		else
			directory = `${
				envs.uploadPath
			}/${new CustomDate().getCurrentDateWithoutHypen()}`;
		if (!fs.existsSync(directory)) {
			fs.mkdirSync(directory, { recursive: true, mode: '0775' });
		}
		return directory;
	}

	static createFileName(name) {
		return `${Date.now()}-${name}`;
	}

	static saveBase64AsFile(filePath, base64) {
		fs.writeFile(filePath, base64, { encoding: 'base64' }, (error) => {
			if (error) {
				throw new Error('Saving file from base64 failed', {
					cause: error.message,
				});
			} else {
				console.log(
					`base64 saved successfully into file at ${filePath}`
				);
			}
		});
	}
}
