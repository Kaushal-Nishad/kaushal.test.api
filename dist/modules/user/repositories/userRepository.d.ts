import { UserEntity } from '../entities/userEntity';
export declare class UserRepository {
    createUser(user: UserEntity): Promise<UserEntity>;
    getUsers(): Promise<UserEntity[]>;
}
