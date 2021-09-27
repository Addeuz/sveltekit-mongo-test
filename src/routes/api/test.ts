import { clientPromise } from '$lib/mongo-client';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ body }) => {
	const client = await clientPromise;

	console.log(client.db().databaseName);

	return {
		status: 200,
		body: {
			message: 'JANNE'
		}
	};
};

export const post: RequestHandler = async ({ body }) => {
	const client = await clientPromise;
	const req = JSON.parse(body as string);
	console.log(JSON.parse(body as string));
	// console.log(message);
	console.log(client.db().databaseName);

	await client.db().collection('test').insertOne({
		message: req.message
	});
	console.log('message', req.message);

	const test = await client.db().collection('test').findOne({ message: req.message });

	console.log(test);
	return {
		status: 200,
		body: {
			message: req.message
		}
	};
};
