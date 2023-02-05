import mongoose from 'mongoose';
import type { Model, Schema, Document } from 'mongoose';
import type { ITeacherClass } from './teacherClass.models';
const { model } = mongoose;

export interface IUser extends Document {
	username: string;
	firstname: string;
	lastname: string;
	password: string;
	type: 'student' | 'teacher' | 'researcher';
	completed: string[];
	school_id: string;
	classes: ITeacherClass[];
}

const UserSchema: Schema = new mongoose.Schema({
	username: {
		type: String
	},
	firstname: {
		type: String
	},
	lastname: {
		type: String
	},
	password: {
		type: String
	},
	type: {
		type: String
	},
	language: {
		type: String
	},
	completed: {
		type: [String]
	},
	school_id: {
		ref: 'School',
		type: mongoose.Schema.Types.ObjectId
	},
	classes: [
		{
			ref: 'TeacherClass',
			type: mongoose.Schema.Types.ObjectId
		}
	]
});

export const User: Model<IUser> = mongoose.models.User || model('User', UserSchema);
