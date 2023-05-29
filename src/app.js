import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import bearerToken from 'express-bearer-token';
import { createServer } from 'http';
import i18n from 'i18n';
import path, { dirname, resolve } from 'path';
import swaggerUi from 'swagger-ui-express';
import { fileURLToPath } from 'url';
import { handleCelebrateError } from './config/celebrateErrorHandler.js';
import {
	connect as dbConnect,
	envs,
	handleError,
	mysqlSSHTunneling,
} from './config/index.js';
import jobs from './cron/index.js';
import { v1Router } from './routes/index.js';
import swaggerSource from './swagger/index.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// For HTTPS
app.enable('trust proxy');

//app.disable("etag");
/**
 * Initilization of API's documentation.
 * We used Swagger 3.
 */
//app.use("/api-docs/assets", express.static(path.join(__dirname, "assets", "swagger")));
const options = {
	explorer: true,
	// swaggerOptions: {
	//   urls: [
	//     {
	//       url: "./assets/swagger_application.json",
	//       name: "Application",
	//     },
	//   ],
	// },
};
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSource, options));

/**
 * Initilization of internationalization(i18n)
 * default language english.
 */
i18n.configure({
	locales: ['en', 'ko'],
	directory: resolve(__dirname, './assets/locales'),
	register: global,
});
app.use(i18n.init);

/**
 * Basic header configuartion
 * It is recomanded to update this section, depending on application's needs
 */
//app.use(cors());

allowedOrigins.push('<URL to parse>');

app.use(
	cors({
		origin: function (origin, callback) {
			// allow requests with no origin & not matching origins
			if (
				!origin ||
				!allowedOrigins ||
				(allowedOrigins.length > 0 &&
					allowedOrigins.indexOf(origin) === -1)
			) {
				return callback(null, '*');
			}

			// this one to set cross origin bypass cookie for TS 1.0
			return callback(null, true);
		},
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		credentials: true,
	})
);

/**
 * Enable cookie header configuartion
 * It is recomanded to update this section, depending on application's needs
 */
app.use(cookieParser());

/**
 * All express middleware goes here
 * parsing request body
 * `bearerToken` = For `Basic Auth` token
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bearerToken());

// app.use(consoleLogger);
/**
 * Handaling database connection
 */
if (envs.env !== 'local') {
	dbConnect().then(() => {
		//Run CRON jobs after db connected successfully
		jobs.forEach((job) => {
			job.start();
		});
	});
} else {
	mysqlSSHTunneling();
}

/**
 * Initializing APIs base routes
 */
app.use('/api/v1', v1Router);

/** Default Route
 */
app.get('/', (_req, res) => res.send({ message: 'Ok' }));

/**
 * 404 Route
 */
app.get('*', (req, res) => res.status(404).send({ message: 'Not found!' }));

/**
 * Overriding the express response
 * ok = 200
 * created = 201
 * noData = 204
 * badRequest = 400
 * forbidden = 403
 * severError = 500
 */
// app.use(errors());
app.use(handleCelebrateError);
app.use(handleError);

/**
 * Establish Socket.io Connection
 */
const httpServer = createServer(app);
//const io = new Server(httpServer);
// const io = socketio(httpServer);
//socketService.socketIO(io);

export default httpServer;
