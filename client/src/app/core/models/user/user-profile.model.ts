import { CommentInfo } from '../comment/comment-info.model';

export interface UserProfile{
    username: string;
    firstName: string;
    lastName: string;
    age: number;
    imageUrl: string;
    email: string;
    orders: Array<string>;
    comments: Array<CommentInfo>;
}