import { connect, disconnect } from '$lib/database/db';
import { User } from '$lib/database/models';
import type { RequestHandler } from '@sveltejs/kit';

// export const get: RequestHandler = async ({ body }) => {
// 	connect();
// 	// const client = await clientPromise;

// 	// console.log(client.db().databaseName)
// 	await disconnect();
// 	return {
// 		status: 200,
// 		body: {

// 		}
// 	};
// };

export const post: RequestHandler = async ({ body }) => {
	await connect();

	const req = JSON.parse(body as string);

	const user = new User({ username: req.message, password: 'janne123456789' });
	const saved = await user.save();
	console.log(saved);

	return {
		status: 200,
		body: {
			saved
		}
	};
};
