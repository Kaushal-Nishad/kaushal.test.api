import { UserService } from './services/userService';
import { UserRepository } from './repositories/userRepository';
export declare const userModule: {
    UserService: typeof UserService;
    UserRepository: typeof UserRepository;
    controllers: {
        createUser: (req: import("express").Request, res: import("express").Response) => Promise<void>;
    };
};
