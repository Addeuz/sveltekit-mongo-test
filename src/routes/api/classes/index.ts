import { TeacherClass, User } from '$lib/database/models';
import type { RequestHandler } from '@sveltejs/kit';
import type { ClassAttributes } from 'src/global';

export const post: RequestHandler = async (request) => {
	const { name, students } = request.body.valueOf() as ClassAttributes;

	// const teacherClass = await TeacherClass.findOne({ name });

	// console.log('teacher', teacherClass);

	// if (teacherClass) {
	// 	return {
	// 		status: 409,
	// 		body: {
	// 			message: 'Class already exists',
	// 			classId: teacherClass._id
	// 		}
	// 	};
	// }

	const newClass = new TeacherClass({ name, students });
	await newClass.save();

	const teacher = await User.findOne({ _id: request.locals.user._id });
	teacher.classes = [...teacher.classes, newClass.id];
	await teacher.save();

	return {
		status: 200,
		body: {
			message: 'Class created',
			class: {
				name,
				students,
				newClass,
				id: newClass.id
			}
		}
	};
};
