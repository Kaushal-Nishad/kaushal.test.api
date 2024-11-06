import mongoose, { Document } from 'mongoose';
export interface UserEntity extends Document {
    name: string;
    email: string;
    phone: string;
    description: string;
    avatar: string;
}
export declare const UserModel: mongoose.Model<UserEntity, {}, {}, {}, mongoose.Document<unknown, {}, UserEntity> & UserEntity & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
