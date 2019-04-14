import { Action } from '@ngrx/store';
import { OrderInfo } from 'src/app/core/models/order/order-info.model';
import { OrderDetails } from 'src/app/core/models/order/order-details.model';

export const GET_MY_ORDERS = '[ORDER] My';
export const GET_ORDER_DETAILS = '[ORDER] Details';

export class GetMyOrders implements Action {
    type: string = GET_MY_ORDERS;
    constructor(public payload: OrderInfo[]) {}
}

export class GetOrderDetails implements Action {
    type: string = GET_ORDER_DETAILS;
    constructor(public payload: OrderDetails) {}
}

export type Type = GetMyOrders | GetOrderDetails;
