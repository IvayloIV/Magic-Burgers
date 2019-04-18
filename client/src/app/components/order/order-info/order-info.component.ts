import { Component, Input } from '@angular/core';
import { OrderDetails } from 'src/app/core/models/order/order-details.model';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss']
})
export class OrderInfoComponent {
  @Input() order: OrderDetails;
}
