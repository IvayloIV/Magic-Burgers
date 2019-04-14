import { OrderState } from '../states/order.state';
import * as OrderAction from '../actions/order.action';

const initialState: OrderState = {
    myOrders: [],
    orderDetails: null
};

function setMyOrders(state: OrderState, payload) {
    return Object.assign({}, state, { 
        myOrders: payload
    });
}

function setOrderDetails(state: OrderState, payload) {
    return Object.assign({}, state, { 
        orderDetails: payload
    });
}

export function orderReducer(
    state: OrderState = initialState,
    action: OrderAction.Type
) {
    switch (action.type) {
        case OrderAction.GET_MY_ORDERS:
            return setMyOrders(state, action.payload);
        case OrderAction.GET_ORDER_DETAILS:
            return setOrderDetails(state, action.payload);
        default:
            return state;
    }
}
