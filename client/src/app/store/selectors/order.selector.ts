import { AppState } from '../app.state';

export const allOrders = (state: AppState) => state.order.allOrders;
export const myOrders = (state: AppState) => state.order.myOrders;
export const orderDetails = (state: AppState) => state.order.orderDetails;
