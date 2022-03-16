import { School, User } from '$lib/database/models';
import type { RequestHandler } from '@sveltejs/kit';
import type { RegisterAttributes } from 'src/global';

export const post: RequestHandler = async (request) => {
	const { username, password, language, type, school_id } =
		request.body.valueOf() as RegisterAttributes;

	const user = await User.findOne({ username });

	if (user) {
		return {
			status: 401,
			body: {
				message: 'User already exists'
			}
		};
	}

	const newUser = new User({ username, password, language, type, school_id });
	await newUser.save();

	const school = await School.findById(school_id);
	school.users = [...school.users, newUser.id];
	await school.save();

	return {
		status: 200,
		body: {
			message: 'User created successfully'
		}
	};
};
