import { Action } from '@ngrx/store';
import { TopBurgers } from 'src/app/core/models/burger/top-burgers.model';
import { BurgerInfo } from 'src/app/core/models/burger/burger-info.model';
import { BurgerDetails } from 'src/app/core/models/burger/burger-details.model';

export const GET_TOP_BURGERS = '[BURGER] Tops';
export const GET_MENU_BURGERS = '[BURGER] Menu';
export const GET_BURGER_DETAILS = '[BURGER] Details';
export const LIKE_BURGER = '[BURGER] Like';
export const DISLIKE_BURGER = '[BURGER] Dislike';

export class GetTopBurgers implements Action {
    type: string = GET_TOP_BURGERS;
    constructor(public payload: TopBurgers) {}
}

export class GetMenuBurgers implements Action {
    type: string = GET_MENU_BURGERS;
    constructor(public payload: BurgerInfo[]) {}
}

export class GetBurgerDetails implements Action {
    type: string = GET_BURGER_DETAILS;
    constructor(public payload: BurgerDetails) {}
}

export class LikeBurger implements Action {
    type: string = LIKE_BURGER;
    constructor(public payload: string) {}
}

export class DislikeBurger implements Action {
    type: string = DISLIKE_BURGER;
    constructor(public payload: string) {}
}

export type Type = GetTopBurgers | GetMenuBurgers | GetBurgerDetails | LikeBurger | DislikeBurger;
