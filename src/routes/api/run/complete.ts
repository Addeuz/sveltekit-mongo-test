// import { User } from '$lib/database/models';
import { CompletedRun, User } from '$lib/database/models';
import type { RequestHandler } from '@sveltejs/kit';
import type { CompletionAttributes } from 'src/global';

export const post: RequestHandler = async (request) => {
	console.log(request.locals);
	console.log(request.body);

	const { completions, taskType } = request.body.valueOf() as CompletionAttributes;

	const user = await User.findById(request.locals.user._id);

	let totalTime = 0;
	for await (const completion of completions) {
		console.log(completion.time);
		totalTime = totalTime + completion.time;
	}

	const completedRun = new CompletedRun({
		tasks: completions,
		totalTime,
		user_id: user.id,
		taskType
	});
	await completedRun.save();

	return {
		status: 200,

		body: {
			message: 'Completion uploaded'
		}
	};
};
//
