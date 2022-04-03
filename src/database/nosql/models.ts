import mongoose, { Schema } from 'mongoose';

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

const userSchema = new Schema({
	id: {
		type: Number,
		index: true,
		unique: true
	},
	username: {
		type: String,
		unique: true
	},
	email: {
		type: String,
		unique: true
	},
	password: String,
}, { autoIndex: false });

export const UserModel = mongoose.model('User', userSchema);
