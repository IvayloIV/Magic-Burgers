import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, mapTo } from 'rxjs/operators';

import { BurgerService } from '../../services/burger.service';
import { AppState } from 'src/app/store/app.state';
import { TopBurgers } from '../../models/burger/top-burgers.model';
import { GetTopBurgers } from 'src/app/store/actions/burger.action';

@Injectable()
export class BurgerTopResolver implements Resolve<boolean> {
    constructor(
        private burgerService: BurgerService,
        private store: Store<AppState>
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.burgerService.getTopBurgers()
            .pipe(tap((data: TopBurgers) => {
                this.store.dispatch(new GetTopBurgers(data));
            }), mapTo(true));
    }
    
}