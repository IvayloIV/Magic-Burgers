import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { OrderDetails } from 'src/app/core/models/order/order-details.model';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {
  order: OrderDetails;

  constructor(
    private store: Store<AppState>,
    private orderService: OrderService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.store.select(state => state.order.orderDetails)
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
}
