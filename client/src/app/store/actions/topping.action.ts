import { Action } from '@ngrx/store';
import { ToppingInfo } from 'src/app/core/models/topping/topping-info.model';

export const GET_INFO_TOPPINGS = '[TOPPING] Info';

export class GetInfoToppings implements Action {
    type: string = GET_INFO_TOPPINGS;
    constructor(public payload: ToppingInfo[]) {}
}

export type Type = GetInfoToppings;
