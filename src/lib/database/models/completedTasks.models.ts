import mongoose from 'mongoose';
import type { Model, Schema, Document } from 'mongoose';
const { model } = mongoose;

import type { AnswerAttributes } from 'src/global';
import type { IUser } from './users.models';

function makeJSONIntoString(v: AnswerAttributes[]) {
	return v.map((value) => {
		if (typeof value === 'string') {
			// do nothing
		} else {
			return JSON.stringify(value);
		}
	});
}

export function getJSONFromString(v: string[]): AnswerAttributes[] {
	return v.map((value) => {
		return JSON.parse(value);
	});
}
export interface ICompletedRun extends Document {
	tasks: string[];
	totalTime: number;
	taskType: string;
	user_id: IUser;
	createdAt: string;
}

const CompletetedRunSchema: Schema = new mongoose.Schema(
	{
		totalTime: {
			type: Number
		},
		taskType: {
			type: String
		},
		tasks: {
			type: [String],
			set: makeJSONIntoString
		},
		user_id: {
			ref: 'User',
			type: mongoose.Schema.Types.ObjectId
		}
	},
	{
		timestamps: true
	}
);

export const CompletedRun: Model<ICompletedRun> =
	mongoose.models?.CompletedRun || model('CompletedRun', CompletetedRunSchema);
