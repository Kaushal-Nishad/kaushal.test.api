"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const class_validator_1 = require("class-validator");
/**
 * @swagger
 * components:
 *   schemas:
 *     CreateUserDto:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: "Name of the user"
 *           example: "Kaushal Nishad"
 *         email:
 *           type: string
 *           description: "Email address of the user"
 *           example: "kaushalnishad212@gmail.com"
 *         phone:
 *           type: string
 *           description: "10-digit Indian phone number"
 *           example: "7985799619"
 *         description:
 *           type: string
 *           description: "Short description or profile of the user"
 *           example: "user details here"
 */
class CreateUserDto {
    name;
    email;
    phone;
    description;
    avatar;
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Name is required' }),
    (0, class_validator_1.Matches)(/^[A-Za-z\s]+$/, { message: 'Name can only contain alphabets and spaces' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Email must be valid' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email is required' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Phone number is required' }),
    (0, class_validator_1.Matches)(/^[6-9]\d{9}$/, { message: 'Phone must be a valid 10-digit Indian number starting with 6-9' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Description must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Description is required' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Avatar must be a string' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "avatar", void 0);
