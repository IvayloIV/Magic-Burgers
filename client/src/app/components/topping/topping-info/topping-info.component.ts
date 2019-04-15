import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';

import { ToppingInfo } from 'src/app/core/models/topping/topping-info.model';
import { toppings } from 'src/app/store/selectors/topping.selector';

@Component({
  selector: 'app-topping-info',
  templateUrl: './topping-info.component.html',
  styleUrls: ['./topping-info.component.css']
})
export class ToppingInfoComponent implements OnInit {
  toppings$: Observable<ToppingInfo[]>;
  @Input() orderFrom: FormGroup;
  toppings = {};

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.toppings$ = this.store.select(toppings);
  }

  get f() {
    return this.orderFrom.controls;
  }

  changeToppings(toppingId: string, price: number) {
    let currentToppings = this.f['toppings'].value;
    const indexOfTopping = currentToppings.indexOf(toppingId);
    this.toppings[toppingId] = price;

    if (indexOfTopping === -1) {
      currentToppings.push(toppingId);
      this.changePrice('add', price);
    } else {
      currentToppings.splice(indexOfTopping, 1);
      this.changePrice('subtract', price)
    }

    this.f['toppings'].setValue(currentToppings);
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
