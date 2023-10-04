import { User } from '$lib/database/models';
import type { TaskKey } from '$lib/tasks';
import type { RequestHandler } from '@sveltejs/kit';

export const put: RequestHandler = async (request) => {
	const data = request.body.valueOf() as { editTasks: { [key: string]: TaskKey[] } };

	console.log(data);
	for (const [id, tasks] of Object.entries(data.editTasks)) {
		const user = await User.findById(id);
		user.tasks = tasks;

		await user.save();
	}

	return {
		status: 200
	};
};
