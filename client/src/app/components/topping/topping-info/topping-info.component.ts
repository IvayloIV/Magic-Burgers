import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Observable } from 'rxjs';
import { ToppingInfo } from 'src/app/core/models/topping/topping-info.model';

@Component({
  selector: 'app-topping-info',
  templateUrl: './topping-info.component.html',
  styleUrls: ['./topping-info.component.css']
})
export class ToppingInfoComponent implements OnInit {
  toppings$: Observable<ToppingInfo[]>;
  @Output() changeTopping = new EventEmitter<{ _id: string, price: number }>();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.toppings$ = this.store.select(state => state.topping.toppings);
  }

  change(topping: string, price: number) {
    this.changeTopping.emit({
      _id: topping,
      price
    });
  }
}
