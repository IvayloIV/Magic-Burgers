import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { OrderInfo } from 'src/app/core/models/order/order-info.model';
import { allOrders } from 'src/app/store/selectors/order.selector';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})
export class AllOrdersComponent implements OnInit {
  orders$: Observable<OrderInfo[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.orders$ = this.store.select(allOrders);
  }

}
