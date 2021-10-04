import { connect } from '$lib/database/db';
import { User } from '$lib/database/models';
import bcrypt from 'bcryptjs';
import type { RequestHandler } from '@sveltejs/kit';

export const post: RequestHandler = async ({ body }) => {
	await connect();

	const req = JSON.parse(body as string) as { username: string; password: string };

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
