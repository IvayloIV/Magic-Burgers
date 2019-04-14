import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Observable } from 'rxjs';
import { OrderInfo } from 'src/app/core/models/order/order-info.model';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {
  orders$: Observable<OrderInfo[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.orders$ = this.store.select(state => state.order.allOrders);
  }

}
