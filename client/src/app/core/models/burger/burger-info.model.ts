export interface BurgerInfo {
    _id: string,
    comments: Array<string>,
    products: Array<string>,
    price: number;
    imageUrl: string;
    name: string;
    creationDate: string;
    likes: Array<string>;
}
