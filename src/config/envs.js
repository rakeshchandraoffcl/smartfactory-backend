import { config } from 'dotenv';
let path = `.env`;
if (process.env.NODE_ENV && String(process.env.NODE_ENV) !== 'dev')
	path = `.env.${process.env.NODE_ENV}`;
config({ path: path });

export const envs = {
	env: process.env.NODE_ENV || 'dev',
	port: Number(process.env.NODE_PORT) || 4000,
	db: {
		host: process.env.MYSQL_HOST || 'localhost',
		port: process.env.MYSQL_PORT || 3306,
		database: process.env.MYSQL_DATABASE,
		username: process.env.MYSQL_USERNAME || '',
		password: process.env.MYSQL_PASSWORD || '',
	},

	apiKey: process.env.API_KEY || '',
	passwordSalt: Number(process.env.PASSWORD_SALT_ROUND) || 12,
	jwt: {
		accessToken: {
			secret: process.env.ACCESS_TOKEN_SECRET || '',
			expiry: Number(process.env.ACCESS_TOKEN_EXPIRED) || 3600,
		},
		refreshToken: {
			secret: process.env.REFRESH_TOKEN_SECRET || '',
			expiry: Number(process.env.REFRESH_TOKEN_EXPIRED) || 2592000,
		},
	},
	smtp: {
		email: process.env.SMTP_AUTH_EMAIL,
		password: process.env.SMTP_AUTH_PASSWORD,
		host: process.env.SMTP_HOST,
		fromEmail: process.env.SMTP_FROM_EMAIL,
		port: process.env.SMTP_PORT,
		secure: !!process.env.SMTP_SECURE == false, // by default true
	},
	aws: {
		accessKeyId: process.env.S3_ACCESS_KEY || '',
		secretAccessKey: process.env.S3_SECRET_KEY || '',
		region: process.env.S3_REGION || '',
	},
	s3: {
		bucketName: process.env.S3_BUCKET_NAME || '',
	},
	sSiteCode: process.env.S_SITE_CODE,
	sSitePw: process.env.S_SITE_PW,
	encryptSecretKey: process.env.ENCRYPT_SECRET_KEY,
	initVectorString: process.env.INIT_VECTOR_STRING,
	uploadPath: process.env.UPLOAD_PATH,
	editorPath: process.env.EDITOR_PATH,

	sms: {
		clientId: process.env.SMS_CLIENT_ID,
		clientPassword: process.env.SMS_CLIENT_PASS,
	},
};
