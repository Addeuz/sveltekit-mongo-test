import mongoose from 'mongoose';
import type { Model, Schema, Document } from 'mongoose';
const { model } = mongoose;

export interface ICookie extends Document {
	cookie_id: string;
	user_id: string;
}

const CookieSchema: Schema = new mongoose.Schema({
	cookie_id: {
		type: String
	},
	user_id: {
		ref: 'User',
		type: mongoose.Schema.Types.ObjectId
	}
});

export const Cookie: Model<ICookie> = mongoose.models?.Cookie || model('Cookie', CookieSchema);
