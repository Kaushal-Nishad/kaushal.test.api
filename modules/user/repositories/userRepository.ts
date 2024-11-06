import { UserModel, UserEntity } from '../entities/userEntity';

export class UserRepository {
  async createUser(user: UserEntity): Promise<UserEntity> {
    return await user.save();
  }

  async getUsers(): Promise<UserEntity[]> {
    return await UserModel.find().exec();
  }

  async getUserById(id: string): Promise<UserEntity | null> {
    return await UserModel.findById(id).exec();
  }

  async updateUser(id: string, updateUserDto: Partial<UserEntity>): Promise<UserEntity | null> {
    return await UserModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
  }

  async deleteUser(id: string): Promise<UserEntity | null> {
    return await UserModel.findByIdAndDelete(id).exec();
  }
}
