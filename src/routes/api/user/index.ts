import { School, User } from '$lib/database/models';
import type { RequestHandler } from '@sveltejs/kit';
import type { RegisterAttributes } from 'src/global';

export const post: RequestHandler = async (request) => {
	const { username, password, type, school_id } = request.body.valueOf() as RegisterAttributes;
	console.log(school_id);
	// const user = await User.findOne({ where: { username } });
	const user = await User.findOne({ username });

	if (user) {
		return {
			status: 401,
			body: {
				message: 'User already exists'
			}
		};
	}

	const newUser = new User({ username, password, type, school_id });
	await newUser.save();

	const school = await School.findById(school_id);
	console.log(school);
	school.users = [...school.users, newUser.id];
	await school.save();

	return {
		status: 200,
		body: {
			message: 'User created successfully'
		}
	};
};