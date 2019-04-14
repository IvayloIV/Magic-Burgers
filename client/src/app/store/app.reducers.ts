import { burgerReducer } from './reducers/burger.reducer';
import { commentReducer } from './reducers/comment.reducer';
import { toppingReducer } from './reducers/topping.reducer';
import { orderReducer } from './reducers/order.reducer';
import { userReducer } from './reducers/user.reducer';

export const appReducers = {
    burger: burgerReducer,
    comment: commentReducer,
    topping: toppingReducer,
    order: orderReducer,
    user: userReducer
};