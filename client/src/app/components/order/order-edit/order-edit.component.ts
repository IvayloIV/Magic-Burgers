import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';

import { OrderDetails } from 'src/app/core/models/order/order-details.model';
import { OrderService } from 'src/app/core/services/order.service';
import { orderDetails } from 'src/app/store/selectors/order.selector';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit, OnDestroy {
  order: OrderDetails;
  sub: Subscription;

  constructor(
    private store: Store<AppState>,
    private orderService: OrderService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.store.select(orderDetails)
      .subscribe(data => this.order = data);
  }

  changeStatus(newStatus: string) {
    this.order.status = newStatus;
  }

  editOrder() {
    const payload = { status: this.order.status };
    const burgerId = this.route.snapshot.params['id'];
    this.orderService.changeStatus(burgerId, payload).subscribe();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
