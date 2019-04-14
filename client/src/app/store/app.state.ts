import { BurgerState } from './states/burger.state';
import { CommentState } from './states/comment.state';
import { ToppingState } from './states/topping.state';
import { OrderState } from './states/order.state';
import { UserState } from './states/user.state';

export interface AppState {
    burger: BurgerState;
    comment: CommentState
    topping: ToppingState,
    order: OrderState,
    user: UserState
}