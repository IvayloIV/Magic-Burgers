export interface OrderCreate {
    deliveryType: string,
    toppings: Array<string>,
    products: Array<string>,
    quantity: number;
    totalPrice: number;
}
