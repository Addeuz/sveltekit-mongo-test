// import mongoose from 'mongoose';
// import type { Model, Schema, Document } from 'mongoose';
// const { model } = mongoose;

// export interface ICompletedTask extends Document {
// 	tasks:
// 	password: string;
// 	type: 'student' | 'teacher' | 'researcher';
// 	school_id: string;
// }

// const UserSchema: Schema = new mongoose.Schema({
// 	username: {
// 		type: String
// 	},
// 	password: {
// 		type: String
// 	},
// 	type: {
// 		type: String
// 	},
// 	completedRuns: {
// 		type: [String]
// 	},
// 	school_id: {
// 		ref: 'School',
// 		type: mongoose.Schema.Types.ObjectId
// 	}
// });

// export const User: Model<IUser> = mongoose.models.User || model('User', UserSchema);
