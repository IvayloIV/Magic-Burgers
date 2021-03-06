import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, mapTo } from 'rxjs/operators';

import { AppState } from 'src/app/store/app.state';
import { ToppingService } from '../../services/topping.service';
import { ToppingInfo } from '../../models/topping/topping-info.model';
import { GetAllToppings } from 'src/app/store/actions/topping.action';

@Injectable()
export class ToppingInfoResolver implements Resolve<boolean> {
    constructor(
        private toppingService: ToppingService,
        private store: Store<AppState>
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.toppingService.getAllToppings()
            .pipe(tap((data: ToppingInfo[]) => {
                this.store.dispatch(new GetAllToppings(data));
            }), mapTo(true));
    }

}
