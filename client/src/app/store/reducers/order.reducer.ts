import { OrderState } from '../states/order.state';
import * as OrderAction from '../actions/order.action';

const initialState: OrderState = {
    myOrders: [],
    orderDetails: null,
    allOrders: []
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

function setAllOrders(state: OrderState, payload) {
    return Object.assign({}, state, { 
        allOrders: payload
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
        case OrderAction.GET_ALL_ORDERS:
            return setAllOrders(state, action.payload);
        default:
            return state;
    }
}
