import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';

import { BurgerDetails } from 'src/app/core/models/burger/burger-details.model';
import { OrderService } from 'src/app/core/services/order.service';
import { burgerDetails } from 'src/app/store/selectors/burger.selector';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss']
})
export class OrderCreateComponent implements OnInit, OnDestroy {
  burger: BurgerDetails;
  sub: Subscription;
  form: FormGroup;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.sub = this.store.select(burgerDetails)
      .subscribe(data => {
        this.burger = data;
        this.buildForm();
      });
  }

  buildForm() {
    const products = this.burger.products.slice();
    this.form = this.fb.group({
      products: [products],
      toppings: [[]],
      totalPrice: [this.burger.price],
      quantity: [1, Validators.min(1)],
      deliveryType: ['Regular']
    });
  }

  increaseQuantity() {
    this.changeQuantity(1);
  }

  decreaseQuantity() {
    this.changeQuantity(-1);
  }

  get f() {
    return this.form.controls;
  }

  createOrder() {
    let payload = this.form.value;
    payload.totalPrice = payload.totalPrice * payload.quantity;
    this.orderService.createOrder(payload, this.burger._id).subscribe();
  }

  private changeQuantity(quantity: number) {
    const currentQuantity = this.f['quantity'].value;
    if (currentQuantity + quantity >= 1) {
      this.f['quantity'].setValue(currentQuantity + quantity);
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
