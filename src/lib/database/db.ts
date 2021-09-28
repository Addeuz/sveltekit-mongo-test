import { variables } from '../environment';
import * as mongoose from 'mongoose';

let database: mongoose.Connection;

export const connect = async (): Promise<void> => {
	const uri = variables.mongoDbURI;

	if (database) {
		return;
	}

	mongoose.connect(uri as string);

	database = mongoose.connection;

	database.once('open', async () => {
		console.log('Connected to db:', database.db.databaseName);
	});

	database.on('error', () => {
		console.log('Error connecting to database');
	});
};

export const disconnect = async (): Promise<void> => {
	if (!database) {
		return;
	}

	mongoose.disconnect().catch((e) => {
		console.log('EERRRROOOOOORRR', e);
	});
};
