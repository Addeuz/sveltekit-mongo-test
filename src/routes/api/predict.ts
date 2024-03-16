// import { User } from '$lib/database/models';
import { TaskKey } from '$lib/tasks';
import { predictUrl } from '$lib/utils';
import type { RequestHandler } from '@sveltejs/kit';

export const post: RequestHandler = async (request) => {
	const body = request.body;

	if (body !== null) {
		const input = JSON.parse(body.toString()) as { [key: string]: Record<TaskKey, number> };

		const predictions = await fetch(predictUrl(), {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(input)
		}).then((res) => res.json());

		return {
			status: 200,
			body: {
				predictions
			}
		};
	}

	return {
		status: 200
	};
};
//
