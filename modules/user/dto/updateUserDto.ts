import { IsEmail, IsOptional, IsString, Matches } from 'class-validator';

/**
 * @swagger
 * components:
 *   schemas:
 *     UpdateUserDto:
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
export class UpdateUserDto {
  @IsOptional()
  @IsString({ message: 'Name must be a string' })
  @Matches(/^[A-Za-z\s]*$/, { message: 'Name can only contain alphabets and spaces' })
  name?: string;

  @IsOptional()
  @IsEmail({}, { message: 'Email must be valid' })
  email?: string;

  @IsOptional()
  @Matches(/^[6-9]\d{9}$/, { message: 'Phone must be a valid 10-digit Indian number starting with 6-9' })
  phone?: string;

  @IsOptional()
  @IsString({ message: 'Description must be a string' })
  description?: string;

  @IsOptional()
  @IsString()
  avatar?: string;
}
