"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const userEntity_1 = require("../entities/userEntity");
class UserRepository {
    async createUser(user) {
        return await user.save();
    }
    async getUsers() {
        return await userEntity_1.UserModel.find().exec();
    }
    async getUserById(id) {
        return await userEntity_1.UserModel.findById(id).exec();
    }
    async updateUser(id, updateUserDto) {
        return await userEntity_1.UserModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
    }
    async deleteUser(id) {
        return await userEntity_1.UserModel.findByIdAndDelete(id).exec();
    }
}
exports.UserRepository = UserRepository;
