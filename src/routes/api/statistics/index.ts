import { CompletedRun } from '$lib/database/models';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async (request) => {
	// Used to protect the route from users not accesing it
	if (request.locals.authenticated) {
		const completedRuns = await CompletedRun.find();

		return {
			status: 200,
			body: {
				completedRuns
			}
		};
	}

	return {
		status: 204,
		body: {
			message: 'Not a researcher'
		}
	};
};
