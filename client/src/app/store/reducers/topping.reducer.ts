import { ToppingState } from '../states/topping.state';
import * as ToppingAction from '../actions/topping.action';

const initialState: ToppingState = {
    toppingsInfo: [],
};

function setInfoToppings(state: ToppingState, payload) {
    return Object.assign({}, state, { 
        toppingsInfo: payload
    });
}
export function toppingReducer(
    state: ToppingState = initialState,
    action: ToppingAction.Type
) {
    switch (action.type) {
        case ToppingAction.GET_INFO_TOPPINGS:
            return setInfoToppings(state, action.payload);
        default:
            return state;
    }
}
