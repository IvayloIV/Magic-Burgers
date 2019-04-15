import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { OrderDetails } from 'src/app/core/models/order/order-details.model';
import { orderDetails } from 'src/app/store/selectors/order.selector';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  order$: Observable<OrderDetails>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.order$ = this.store.select(orderDetails);
  }

}
