// import { User } from '$lib/database/models';
import type { RequestHandler } from '@sveltejs/kit';

export const post: RequestHandler = async (request) => {
	console.log(request.locals);
	console.log(request.body);

	// const user = await User.findById(request.locals._id);
	// user.completedRuns = [ ...user.completedRuns, ]

	return {
		status: 200,

		body: {
			message: 'Completion uploaded'
		}
	};
};
