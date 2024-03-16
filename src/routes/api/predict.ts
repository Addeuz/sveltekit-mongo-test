// import { User } from '$lib/database/models';
import { InternalPredict } from '$lib/tasks/predict';
import { predictUrl } from '$lib/utils';
import type { RequestHandler } from '@sveltejs/kit';

export const post: RequestHandler = async (request) => {
	const body = request.body;

	if (body !== null) {
		const data = JSON.parse(body.toString()) as InternalPredict[];

		const formData = new URLSearchParams();
		for (const [key, value] of data) {
			formData.append(key, value.toString());
		}

		const res = await fetch(predictUrl(), {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: formData.toString()
		});
		const response = await res.json();

		return {
			status: 200,
			body: {
				prediction: response.prediction
			}
		};
	}

	return {
		status: 200
	};
};
//
