import { AppState } from '../app.state';

export const burgerDetails = (state: AppState) => state.burger.burgerDetails;
export const topBurgers = (state: AppState) => state.burger.topBurgers;
export const allBurgers = (state: AppState) => state.burger.burgers;
