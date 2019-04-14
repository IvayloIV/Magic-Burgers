export interface BurgerCreate {
    name: string;
    price: number;
    description: string;
    weight: number;
    calories: number;
    imageUrl: string;
    products: Array<string>;
}
