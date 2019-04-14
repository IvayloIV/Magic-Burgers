import { Component, Input } from '@angular/core';
import { OrderInfo } from 'src/app/core/models/order/order-info.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  @Input() orders: OrderInfo[];
  @Input() canEdit: boolean;
}
