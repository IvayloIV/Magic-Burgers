import { BurgerState } from './states/burger.state';
import { CommentState } from './states/comment.state';
import { ToppingState } from './states/topping.state';
import { OrderState } from './states/order.state';

export interface AppState {
    burger: BurgerState;
    comment: CommentState
    topping: ToppingState,
    order: OrderState
}