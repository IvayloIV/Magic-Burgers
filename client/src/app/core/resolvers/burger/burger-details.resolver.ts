import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, mapTo } from 'rxjs/operators';

import { BurgerService } from '../../services/burger.service';
import { AppState } from 'src/app/store/app.state';
import { GetBurgerDetails } from 'src/app/store/actions/burger.action';
import { BurgerDetails } from '../../models/burger/burger-details.model';

@Injectable()
export class BurgerDetailsResolver implements Resolve<boolean> {
    constructor(
        private burgerService: BurgerService,
        private store: Store<AppState>
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const id = route.params['id'];
        return this.burgerService.getDetails(id)
            .pipe(tap((data: BurgerDetails) => {
                this.store.dispatch(new GetBurgerDetails(data));
            }), mapTo(true));
    }
    
}
