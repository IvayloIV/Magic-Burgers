import { Component, OnInit } from '@angular/core';
import { ToppingInfo } from 'src/app/core/models/topping/topping-info.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-topping-list',
  templateUrl: './topping-list.component.html',
  styleUrls: ['./topping-list.component.css']
})
export class ToppingListComponent implements OnInit {
  toppings$: Observable<ToppingInfo[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.toppings$ = this.store.select(state => state.topping.toppings);
  }

}
