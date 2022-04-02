import mongoose from 'mongoose';
const { Schema } = mongoose;

export interface User {
  id: Number;
  username: String;
  email: String;
  password: String;
}

const userSchema = new Schema({
  id: Number,
  username: String,
  email: String,
  password: String,
})

export const UserModel = mongoose.model('User', userSchema);
