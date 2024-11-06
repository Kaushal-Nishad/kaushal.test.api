"use strict";
// src/modules/user/services/userService.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const userRepository_1 = require("../repositories/userRepository");
const userEntity_1 = require("../entities/userEntity");
class UserService {
    userRepository;
    constructor() {
        this.userRepository = new userRepository_1.UserRepository();
    }
    async createUser(createUserDto, avatar) {
        // Create a new user instance using the Mongoose model
        const user = new userEntity_1.UserModel({ ...createUserDto, avatar });
        return await this.userRepository.createUser(user);
    }
    async getUsers() {
        return await this.userRepository.getUsers();
    }
    async getUserById(id) {
        // Get user by ID
        return await this.userRepository.getUserById(id);
    }
    async updateUser(id, updateUserDto, avatar) {
        // Update user details
        const updatedData = { ...updateUserDto };
        if (avatar) {
            updatedData.avatar = avatar; // Include avatar if provided
        }
        return await this.userRepository.updateUser(id, updatedData);
    }
    async deleteUser(id) {
        // Delete user by ID
        return await this.userRepository.deleteUser(id);
    }
}
exports.UserService = UserService;
