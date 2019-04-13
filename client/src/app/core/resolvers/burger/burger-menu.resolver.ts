import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, mapTo } from 'rxjs/operators';

import { BurgerService } from '../../services/burger.service';
import { AppState } from 'src/app/store/app.state';
import { GetMenuBurgers } from 'src/app/store/actions/burger.action';
import { BurgerInfo } from '../../models/burger/burger-info.model';

@Injectable()
export class BurgerMenuResolver implements Resolve<boolean> {
    constructor(
        private burgerService: BurgerService,
        private store: Store<AppState>
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.burgerService.getMenu()
            .pipe(tap((data: BurgerInfo[]) => {
                this.store.dispatch(new GetMenuBurgers(data));
            }), mapTo(true));
    }
    
}
