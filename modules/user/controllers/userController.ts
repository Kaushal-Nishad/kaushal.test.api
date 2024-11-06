import { Request, Response } from 'express';
import { UserService } from '../services/userService';
import { CreateUserDto } from '../dto/createUserDto';
import { UpdateUserDto } from '../dto/updateUserDto';
import { validateOrReject } from 'class-validator';

const userService = new UserService();

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const createUserDto = new CreateUserDto();
    Object.assign(createUserDto, req.body);
    await validateOrReject(createUserDto);

    const avatar:any = req.file ? req.file.filename : null;
    if (!avatar) {
      res.status(400).json({ message: 'Avatar is required' });
      return;
    }

    const user = await userService.createUser(createUserDto, avatar);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error instanceof Array ? error : (error as Error).message });
  }
};

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  const userId = req.params.id;
  try {
    const user = await userService.getUserById(userId);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  const userId = req.params.id;
  try {
    const updateUserDto = new UpdateUserDto();
    Object.assign(updateUserDto, req.body);
    await validateOrReject(updateUserDto);

    const updatedUser = await userService.updateUser(userId, updateUserDto);
    if (!updatedUser) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error instanceof Array ? error : (error as Error).message });
  }
};


export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  const userId = req.params.id;
  try {
    const deletedUser = await userService.deleteUser(userId);
    if (!deletedUser) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
