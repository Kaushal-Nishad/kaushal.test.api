import { IsEmail, IsNotEmpty, Matches, IsString, IsOptional } from 'class-validator';

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
export class CreateUserDto {
  @IsNotEmpty({ message: 'Name is required' })
  @Matches(/^[A-Za-z\s]+$/, { message: 'Name can only contain alphabets and spaces' })
  name!: string;

  @IsEmail({}, { message: 'Email must be valid' })
  @IsNotEmpty({ message: 'Email is required' })
  email!: string;

  @IsNotEmpty({ message: 'Phone number is required' })
  @Matches(/^[6-9]\d{9}$/, { message: 'Phone must be a valid 10-digit Indian number starting with 6-9' })
  phone!: string;

  @IsString({ message: 'Description must be a string' })
  @IsNotEmpty({ message: 'Description is required' })
  description!: string;

  @IsOptional()
  @IsString({ message: 'Avatar must be a string' })
  avatar?: string;
}
