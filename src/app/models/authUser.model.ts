import { UserModel } from './user.model';

export interface AuthUserModel {
    token: string;
    refreshToken: string;
    user: UserModel;
}

