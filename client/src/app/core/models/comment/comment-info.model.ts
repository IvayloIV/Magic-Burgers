import { UserInfo } from '../user/user-info.model';

export interface CommentInfo {
    _id: string;
    creator: UserInfo;
    message: string;
    rating: number;
    creationDate: string;
    burger: string;
}
