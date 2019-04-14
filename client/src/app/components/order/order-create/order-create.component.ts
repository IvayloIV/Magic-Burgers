import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { BurgerDetails } from 'src/app/core/models/burger/burger-details.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {
  burger: BurgerDetails;
  form: FormGroup;
  toppings = {};

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.store.select(state => state.burger.burgerDetails)
      .subscribe(data => {
        this.burger = data
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
    const currentQuantity = this.f['quantity'].value;
    this.f['quantity'].setValue(currentQuantity + 1);
  }

  decreaseQuantity() {
    const currentQuantity = this.f['quantity'].value;
    if (currentQuantity > 1) {
      this.f['quantity'].setValue(currentQuantity - 1);
    }
  }

  changeProducts(product: string) {
    let currentProducts = this.f['products'].value;
    const indexOfProduct = currentProducts.indexOf(product);

    if (indexOfProduct === -1) {
      currentProducts.push(product);
    } else {
      currentProducts.splice(indexOfProduct, 1);
    }

    this.f['products'].setValue(currentProducts);
  }

  changeToppings(event) {
    const id = event._id;
    const price = event.price;
    let currentToppings = this.f['toppings'].value;
    const indexOfTopping = currentToppings.indexOf(id);
    this.toppings[id] = price;

    if (indexOfTopping === -1) {
      currentToppings.push(id);
      this.changePrice('add', price);
    } else {
      currentToppings.splice(indexOfTopping, 1);
      this.changePrice('subtract', price)
    }

    this.f['toppings'].setValue(currentToppings);
  }

  get f() {
    return this.form.controls;
  }

  createOrder() {
    let payload = this.form.value;
    payload.totalPrice = payload.totalPrice * payload.quantity;
    this.orderService.createOrder(payload, this.burger._id).subscribe();
  }

  private changePrice(comment: string, price: number) {
    let currentValue = this.f['totalPrice'].value;
    if (comment === 'add') {
      currentValue += price;
    } else {
      currentValue -= price;
    }

    this.f['totalPrice'].setValue(currentValue);
  }
}
