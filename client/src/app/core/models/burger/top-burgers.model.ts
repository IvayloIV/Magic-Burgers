import { BurgerInfo } from './burger-info.model';

export interface TopBurgers {
    theNewest: Array<BurgerInfo[]>,
    theMostLiked: Array<BurgerInfo[]>, 
    theMostCommented: Array<BurgerInfo[]>
}
