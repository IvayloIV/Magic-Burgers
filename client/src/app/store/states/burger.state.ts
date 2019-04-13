import { TopBurgers } from 'src/app/core/models/burger/top-burgers.model';
import { BurgerInfo } from 'src/app/core/models/burger/burger-info.model';
import { BurgerDetails } from 'src/app/core/models/burger/burger-details.model';

export interface BurgerState {
    topBurgers: TopBurgers;
    burgers: BurgerInfo[];
    burgerDetails: BurgerDetails;
}
