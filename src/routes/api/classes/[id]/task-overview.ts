import { CompletedRun, TeacherClass, User } from '$lib/database/models';
import type { TaskOverview } from '$lib/tasks';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async (request) => {
	if (!request.path.endsWith('manifest.json')) {
		const classInfo = await TeacherClass.findById(request.params.id).populate({
			path: 'students',
			model: User
		});

		const taskOverview: TaskOverview = {
			quantities: [],
			quantityComparison: [],
			numberComparison: [],
			colorPattern: [],
			numberPattern: [],
			hiddenNumber: [],
			numberLine: [],
			completionToTen: [],
			plus: [],
			minus: []
		};

		for (const student of classInfo.students) {
			const completedRuns = await CompletedRun.find({ user_id: student }).populate({
				path: 'user_id',
				model: User
			});

			for (const completed of completedRuns) {
				taskOverview[completed.taskType] = [...taskOverview[completed.taskType], completed];
			}
		}

		return {
			status: 200,
			body: {
				taskOverview
			}
		};
	}
};
