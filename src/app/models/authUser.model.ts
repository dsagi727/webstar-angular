import { UserModel } from './user.model';

export interface AtuhUserModel {
    token: string;
    refreshToken: string;
    user: UserModel;
}

