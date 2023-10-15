import { TeacherClass, User } from '$lib/database/models';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async (request) => {
	if (!request.path.endsWith('manifest.json')) {
		const classInfo = await TeacherClass.findById(request.params.id).populate({
			path: 'students',
			model: User
		});

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

export const del: RequestHandler = async (request) => {
	const user = await User.findById(request.locals.user._id);
	user.classes = user.classes.filter((c) => c.toString() !== request.params.id);
	user.save();

	await TeacherClass.findByIdAndDelete(request.params.id);

	return {
		status: 200
	};
};
