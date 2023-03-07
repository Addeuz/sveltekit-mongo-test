import { TeacherClass, User } from '$lib/database/models';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async (request) => {
	if (!request.path.endsWith('manifest.json')) {
		const classInfo = await TeacherClass.findById(request.params.id).populate({
			path: 'students',
			model: User
		});

		console.log(classInfo.students[0]);

		if (classInfo) {
			return {
				status: 200,
				body: {
					classInfo
				}
			};
		}

		return {
			status: 404,
			body: {
				message: 'Class was not found'
			}
		};
	}
};
