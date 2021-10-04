import mongoose from 'mongoose';
import type { Model, Schema, Document } from 'mongoose';
const { model } = mongoose;

export interface IUser extends Document {
	username: string;
	password: string;
	type: 'student' | 'teacher' | 'researcher';
	completed: string[];
	school_id: string;
}

const UserSchema: Schema = new mongoose.Schema({
	username: {
		type: String
	},
	password: {
		type: String
	},
	type: {
		type: String
	},
	completed: {
		type: [String]
	},
	school_id: {
		ref: 'School',
		type: mongoose.Schema.Types.ObjectId
	}
});

export const User: Model<IUser> = mongoose.models.User || model('User', UserSchema);
