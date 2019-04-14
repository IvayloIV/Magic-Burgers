import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, mapTo } from 'rxjs/operators';

import { AppState } from 'src/app/store/app.state';
import { OrderService } from '../../services/order.service';
import { OrderInfo } from '../../models/order/order-info.model';
import { GetAllOrders } from 'src/app/store/actions/order.action';

@Injectable()
export class AllOrdersResolver implements Resolve<boolean> {
    constructor(
        private orderService: OrderService,
        private store: Store<AppState>
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.orderService.getAllOrders()
            .pipe(tap((data: OrderInfo[]) => {
                this.store.dispatch(new GetAllOrders(data));
            }), mapTo(true));
    }

}
