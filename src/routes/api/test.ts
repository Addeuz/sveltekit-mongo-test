import { connect } from '$lib/database/db';
import { User } from '$lib/database/models';
import bcrypt from 'bcryptjs';
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

	const req = JSON.parse(body as string) as { username: string; password: string };

	// const user = new User({ username: req.message, password: 'janne123456789', type: 'researcher' });
	// const saved = await user.save();
	// console.log(saved);

	const cryptPassword = bcrypt.hashSync(req.password);

	const user = new User({ username: req.username, password: cryptPassword, type: 'researcher' });
	await user.save();

	return {
		status: 200,
		body: {
			message: 'User created'
		}
	};
};
