import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { OrderInfo } from 'src/app/core/models/order/order-info.model';
import { Observable } from 'rxjs';
import { myOrders } from 'src/app/store/selectors/order.selector';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  myOrders$: Observable<OrderInfo[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.myOrders$ = this.store.select(myOrders);
  }

}
