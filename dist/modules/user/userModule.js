"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModule = void 0;
const userService_1 = require("./services/userService");
const userRepository_1 = require("./repositories/userRepository");
const userController_1 = require("./controllers/userController");
exports.userModule = {
    UserService: userService_1.UserService,
    UserRepository: userRepository_1.UserRepository,
    controllers: {
        createUser: userController_1.createUser,
        getUsers: userController_1.getUsers,
        getUserById: userController_1.getUserById,
        updateUser: userController_1.updateUser,
        deleteUser: userController_1.deleteUser
    },
};
