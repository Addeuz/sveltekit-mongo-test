import type { RequestHandler } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import * as cookie from 'cookie';
import { connect } from '$lib/database/db';
import { User, Cookie } from '$lib/database/models';

export const post: RequestHandler = async (request) => {
	await connect();

	// const { username, password, type } = request.body;
	const { username, password } = request.body.valueOf() as { username: string; password: string };

	// const user = await User.findOne({ where: { username } });
	const user = await User.findOne({ username });

	console.log(user);

	if (!user) {
		return {
			status: 401,
			body: {
				message: 'Incorrect username or password'
			}
		};
	}

	if (!bcrypt.compareSync(password, user.password)) {
		return {
			status: 401,
			body: {
				message: 'Incorrect username or password'
			}
		};
	}

	const cookieId = uuidv4();

	const newCookie = new Cookie({ cookie_id: cookieId, user_id: user._id });
	await newCookie.save();
	console.log(newCookie);

	// Cookie.create({
	// 	cookieId
	// }).then((cookie) => {
	// 	cookie.setUser(user);
	// });

	const headers = {
		'Set-Cookie': cookie.serialize('session_id', cookieId, {
			httpOnly: true,
			maxAge: 60 * 60 * 24 * 7,
			sameSite: 'lax',
			path: '/'
		})
	};

	return {
		status: 200,
		headers,
		body: {
			message: 'Success'
		}
	};
};
