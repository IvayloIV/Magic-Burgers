import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, mapTo } from 'rxjs/operators';

import { AppState } from 'src/app/store/app.state';
import { OrderService } from '../../services/order.service';
import { GetOrderDetails } from 'src/app/store/actions/order.action';
import { OrderDetails } from '../../models/order/order-details.model';

@Injectable()
export class OrderDetailsResolver implements Resolve<boolean> {
    constructor(
        private orderService: OrderService,
        private store: Store<AppState>
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const id = route.params['id'];
        return this.orderService.getDetails(id)
            .pipe(tap((data: OrderDetails) => {
                this.store.dispatch(new GetOrderDetails(data));
            }), mapTo(true));
    }

}
