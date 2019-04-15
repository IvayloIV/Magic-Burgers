import { BurgerDetails } from '../burger/burger-details.model';
import { ToppingInfo } from '../topping/topping-info.model';
import { UserInfo } from '../user/user-info.model';

export interface OrderDetails {
    _id: string;
    burger: BurgerDetails;
    deliveryType: string;
    quantity: number;
    totalPrice: number;
    status: string;
    toppings: ToppingInfo[];
    products: string[];
    creationDate: string;
    creator: UserInfo;
}
