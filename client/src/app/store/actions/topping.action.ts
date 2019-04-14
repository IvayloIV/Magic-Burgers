import { Action } from '@ngrx/store';
import { ToppingInfo } from 'src/app/core/models/topping/topping-info.model';

export const GET_ALL_TOPPINGS = '[TOPPING] All';

export class GetAllToppings implements Action {
    type: string = GET_ALL_TOPPINGS;
    constructor(public payload: ToppingInfo[]) {}
}

export type Type = GetAllToppings;
