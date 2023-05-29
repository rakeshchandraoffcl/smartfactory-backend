import app from './app.js';
import { envs } from './config/index.js';

app.listen(envs.port, () =>
	console.log(
		`Express server listening on port ${envs.port}\n************ EXECUTED IN ${process.env.NODE_ENV} ************`
	)
);
