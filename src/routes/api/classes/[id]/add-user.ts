import { TeacherClass } from '$lib/database/models';
import type { IUser } from '$lib/database/models/users.models';
import type { RequestHandler } from '@sveltejs/kit';

export const post: RequestHandler = async (request) => {
	const { user } = request.body.valueOf() as { user: IUser };
	const classInfo = await TeacherClass.findById(request.params.id);
	classInfo.students = [...classInfo.students, user._id];
	await classInfo.save();

	return {
		status: 200,
		body: {
			message: 'Student added',
			class: classInfo
		}
	};
};
