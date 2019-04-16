import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';

import { BurgerInfo } from 'src/app/core/models/burger/burger-info.model';
import { allBurgers } from 'src/app/store/selectors/burger.selector';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent implements OnInit {
  menu$: Observable<BurgerInfo[]>;
  pageSize: number = 3;
  currentPage: number = 1;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.menu$ = this.store.select(allBurgers);
  }

  pageChanged(page) {
    this.currentPage = page;
  }
}
