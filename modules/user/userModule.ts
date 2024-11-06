import { UserService } from './services/userService';
import { UserRepository } from './repositories/userRepository';
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} from './controllers/userController';

export const userModule = {
  UserService,
  UserRepository,
  controllers: {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
  },
};
