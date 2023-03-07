import { User } from '$lib/database/models';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
	const students = await User.find({ type: 'student' });

	return {
		status: 200,
		body: {
			students
		}
	};
};
