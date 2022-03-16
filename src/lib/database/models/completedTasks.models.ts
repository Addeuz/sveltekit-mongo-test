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

// function getJSONFromString(v: string[]): AnswerAttributes[] {
// 	return v.map((value) => {
// 		return JSON.parse(value);
// 	});
// }
export interface ICompletedRun extends Document {
	tasks: AnswerAttributes[];
	totalTime: number;
	taskType: string;
	user_id: IUser;
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
			// get: getJSONFromString
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
	mongoose.models.CompletedRun || model('CompletedRun', CompletetedRunSchema);
