import { CommentInfo } from '../comment/comment-info.model';

export interface UserDetails {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
    age: number;
    imageUrl: string;
    blocked: boolean;
    email: string;
    orders: Array<string>;
    comments: Array<CommentInfo>;
}