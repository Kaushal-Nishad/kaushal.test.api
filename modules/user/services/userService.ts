import { UserRepository } from '../repositories/userRepository';
import { CreateUserDto } from '../dto/createUserDto';
import { UpdateUserDto } from '../dto/updateUserDto';
import { UserEntity, UserModel } from '../entities/userEntity';

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(createUserDto: CreateUserDto, avatar: string): Promise<UserEntity> {
    const user = new UserModel({ ...createUserDto, avatar });
    return await this.userRepository.createUser(user);
  }

  async getUsers(): Promise<UserEntity[]> {
    return await this.userRepository.getUsers();
  }

  async getUserById(id: string): Promise<UserEntity | null> {
    return await this.userRepository.getUserById(id);
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto, avatar?: string): Promise<UserEntity | null> {
    const updatedData = { ...updateUserDto };
    if (avatar) {
      updatedData.avatar = avatar;
    }
    return await this.userRepository.updateUser(id, updatedData);
  }

  async deleteUser(id: string): Promise<UserEntity | null> {
    return await this.userRepository.deleteUser(id);
  }
}
