import { BurgerDetails } from '../burger/burger-details.model';

export interface OrderInfo {
    _id: string;
    burger: BurgerDetails;
    deliveryType: string;
    quantity: number;
    totalPrice: number;
    status: string;
}
