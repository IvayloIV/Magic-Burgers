import { OrderInfo } from 'src/app/core/models/order/order-info.model';
import { OrderDetails } from 'src/app/core/models/order/order-details.model';

export interface OrderState {
    myOrders: OrderInfo[];
    orderDetails: OrderDetails;
}
