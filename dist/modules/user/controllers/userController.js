"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getUsers = exports.createUser = void 0;
const userService_1 = require("../services/userService");
const createUserDto_1 = require("../dto/createUserDto");
const updateUserDto_1 = require("../dto/updateUserDto");
const class_validator_1 = require("class-validator");
const userService = new userService_1.UserService();
// Create a new user
const createUser = async (req, res) => {
    try {
        const createUserDto = new createUserDto_1.CreateUserDto();
        Object.assign(createUserDto, req.body);
        await (0, class_validator_1.validateOrReject)(createUserDto);
        const avatar = req.file ? req.file.filename : null;
        if (!avatar) {
            res.status(400).json({ message: 'Avatar is required' });
            return;
        }
        const user = await userService.createUser(createUserDto, avatar);
        res.status(201).json(user);
    }
    catch (error) {
        res.status(400).json({ message: error instanceof Array ? error : error.message });
    }
};
exports.createUser = createUser;
// Get all users
const getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getUsers = getUsers;
// Get a user by ID
const getUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await userService.getUserById(userId);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getUserById = getUserById;
// Update a user by ID
const updateUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const updateUserDto = new updateUserDto_1.UpdateUserDto();
        Object.assign(updateUserDto, req.body);
        await (0, class_validator_1.validateOrReject)(updateUserDto);
        const updatedUser = await userService.updateUser(userId, updateUserDto);
        if (!updatedUser) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json(updatedUser);
    }
    catch (error) {
        res.status(400).json({ message: error instanceof Array ? error : error.message });
    }
};
exports.updateUser = updateUser;
// Delete a user by ID
const deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const deletedUser = await userService.deleteUser(userId);
        if (!deletedUser) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(204).send(); // No content to send back
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.deleteUser = deleteUser;
