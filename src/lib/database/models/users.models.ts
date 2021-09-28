import mongoose from 'mongoose';
import type { Model, Schema, Document } from 'mongoose';
const { model } = mongoose;

export interface IUser extends Document {
	username: string;
	password: string;
	completedRuns: string[];
}

const UserSchema: Schema = new mongoose.Schema({
	username: {
		type: String
	},
	password: {
		type: String
	},
	completedRuns: {
		type: [String]
	}
});

export const User: Model<IUser> = mongoose.models.User || model('User', UserSchema);
