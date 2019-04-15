export interface UserInfo {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
    age: number;
    imageUrl: string;
    blocked: boolean;
    email: string;
    orders: Array<string>;
    comments: Array<string>;
}