import mongoose from 'mongoose';
const { model } = mongoose;
import type { Model, Schema, Document } from 'mongoose';
import type { IUser } from './users.models';

export interface ITeacherClass extends Document {
	name: string;
	students: IUser[];
}

const TeacherClassSchema: Schema = new mongoose.Schema({
	name: {
		type: String
	},
	students: {
		type: [
			{
				ref: 'User',
				type: mongoose.Schema.Types.ObjectId
			}
		]
	}
});

export const TeacherClass: Model<ITeacherClass> =
	mongoose.models?.TeacherClass || model('TeacherClass', TeacherClassSchema);
