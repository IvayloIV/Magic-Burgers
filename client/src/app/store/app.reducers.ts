import { burgerReducer } from './reducers/burger.reducer';
import { commentReducer } from './reducers/comment.reducer';
import { toppingReducer } from './reducers/topping.reducer';

export const appReducers = {
    burger: burgerReducer,
    comment: commentReducer,
    topping: toppingReducer
};