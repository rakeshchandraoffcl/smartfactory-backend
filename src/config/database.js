import { DataSource } from 'typeorm';
import { envs } from './index.js';

export const AppDataSource = new DataSource({
	type: 'mysql',
	host: envs.db.host,
	port: 3306,
	username: envs.db.username,
	password: envs.db.password,
	database: envs.db.database,

	connectionLimit: 1000,
	connectTimeout: 60 * 60 * 1000,
	acquireTimeout: 60 * 60 * 1000,
	timeout: 60 * 60 * 1000,
	maxQueryExecutionTime: 5000,

	synchronize: false,
	logging: false,
	entities: ['src/entity/**/*.js'],
	migrations: [],
	subscribers: [],
});

export const connectTypeORM = () => {
	if (!AppDataSource.isInitialized) {
		return AppDataSource.initialize((err) => {
			if (!err)
				console.log(
					'TypeORM MYSQL Connection Established Successfully'
				);
			else
				console.log(
					'TypeORM Connection Failed!' +
						JSON.stringify(err, undefined, 2)
				);
		});
	} else {
		return new Promise((resolve) => resolve(MysqlDataSource));
	}
};
