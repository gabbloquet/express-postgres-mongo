import mongoose from 'mongoose';
const { Schema } = mongoose;

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

const userSchema = new Schema({
	id: Number,
	username: String,
	email: String,
	password: String,
});

export const UserModel = mongoose.model('User', userSchema);
