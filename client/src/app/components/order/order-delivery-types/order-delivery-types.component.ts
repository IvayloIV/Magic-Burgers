import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-delivery-types',
  templateUrl: './order-delivery-types.component.html',
  styleUrls: ['./order-delivery-types.component.css']
})
export class OrderDeliveryTypesComponent {
  @Input() orderFrom: FormGroup;
}
