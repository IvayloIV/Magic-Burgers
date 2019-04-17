import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';

import { ToppingInfo } from 'src/app/core/models/topping/topping-info.model';
import { toppings } from 'src/app/store/selectors/topping.selector';

@Component({
  selector: 'app-topping-list',
  templateUrl: './topping-list.component.html',
  styleUrls: ['./topping-list.component.scss']
})
export class ToppingListComponent implements OnInit {
  toppings$: Observable<ToppingInfo[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.toppings$ = this.store.select(toppings);
  }

}
