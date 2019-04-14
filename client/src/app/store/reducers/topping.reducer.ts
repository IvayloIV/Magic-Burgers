import { ToppingState } from '../states/topping.state';
import * as ToppingAction from '../actions/topping.action';

const initialState: ToppingState = {
    toppings: [],
};

function setAllToppings(state: ToppingState, payload) {
    return Object.assign({}, state, { 
        toppings: payload
    });
}
export function toppingReducer(
    state: ToppingState = initialState,
    action: ToppingAction.Type
) {
    switch (action.type) {
        case ToppingAction.GET_ALL_TOPPINGS:
            return setAllToppings(state, action.payload);
        default:
            return state;
    }
}
