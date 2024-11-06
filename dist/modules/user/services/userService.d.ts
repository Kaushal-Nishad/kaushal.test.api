import { CreateUserDto } from '../dto/createUserDto';
import { UserEntity } from '../entities/userEntity';
export declare class UserService {
    private userRepository;
    constructor();
    createUser(createUserDto: CreateUserDto, avatar: string): Promise<UserEntity>;
    getUsers(): Promise<UserEntity[]>;
}
