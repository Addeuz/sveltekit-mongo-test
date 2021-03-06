import { connect } from '$lib/database/db';
import { School } from '$lib/database/models';
import type { IUser } from '$lib/database/models/users.models';
import type { RequestHandler } from '@sveltejs/kit';

export const post: RequestHandler = async ({ body }) => {
	await connect();

	const req = JSON.parse(body as string) as { name: string };

	const school = new School({ name: req.name });
	await school.save();

	return {
		status: 200,
		body: {
			message: 'School created'
		}
	};
};

export const get: RequestHandler = async (request) => {
	if (request.locals.user) {
		const user = request.locals.user as IUser;
		if (user.type === 'researcher') {
			const schools = await School.find();
			// const tempSchools = schools.map((school) => {
			// 	return { ...school.get() };
			// });

			return {
				status: 200,
				body: {
					schools
				}
			};
		}
	}

	return {
		status: 204,
		body: {
			message: 'Not a researcher'
		}
	};
};
