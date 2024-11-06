import mongoose, { Document, Schema } from 'mongoose';

export interface UserEntity extends Document {
  name: string;
  email: string;
  phone: string;
  description: string;
  avatar: string;
}

const userSchema = new Schema<UserEntity>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  description: { type: String, required: true },
  avatar: { type: String, required: true },
});

export const UserModel = mongoose.model<UserEntity>('User', userSchema);
