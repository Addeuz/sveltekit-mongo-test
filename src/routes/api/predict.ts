// import { User } from '$lib/database/models';
import { InternalPredict } from '$lib/tasks/predict';
import { predictUrl } from '$lib/utils';
import type { RequestHandler } from '@sveltejs/kit';

export const post: RequestHandler = async (request) => {
	const body = request.body;

	if (body !== null) {
		const input = JSON.parse(body.toString()) as { [key: string]: InternalPredict[] };

		const responses: Promise<Response>[] = [];
		for (const data of Object.values(input)) {
			const formData = new URLSearchParams();
			for (const [key, value] of data) {
				formData.append(key, value.toString());
			}
			const res = fetch(predictUrl(), {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: formData.toString()
			});

			responses.push(res);
		}

		const allResponses = await Promise.all(responses);
		const predictions: { [key: string]: 'T' | 'F' } = {};
		for (const [index, userId] of Object.keys(input).entries()) {
			const response = allResponses[index];
			const prediction = await response.json();

			predictions[userId] = prediction;
		}

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
