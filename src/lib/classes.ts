import type { ITeacherClass } from './database/models/teacherClass.models';

export function updateTeacherClasses(newClass: ITeacherClass, session: any): any {
	const classes = session.user.classes as ITeacherClass[];
	const classIndex = classes.findIndex(({ _id }) => newClass._id === _id);
	if (classIndex !== -1) {
		classes[classIndex] = newClass;
		session.user.classes = classes;
	}
	return session.user.classes;
}
