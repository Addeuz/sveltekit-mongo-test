import mongoose from 'mongoose';
import type { Model, Schema, Document } from 'mongoose';
const { model } = mongoose;

export interface ISchool extends Document {
	name: string;
	users: string[];
}

const SchoolSchema: Schema = new mongoose.Schema({
	name: {
		type: String
	},
	users: {
		type: [
			{
				ref: 'User',
				type: mongoose.Schema.Types.ObjectId
			}
		]
	}
});

export const School: Model<ISchool> = mongoose.models?.School || model('School', SchoolSchema);
