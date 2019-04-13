import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Observable } from 'rxjs';
import { BurgerInfo } from 'src/app/core/models/burger/burger-info.model';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.css']
})
export class BurgerMenuComponent implements OnInit {
  menu$: Observable<BurgerInfo[]>;
  pageSize: number = 3;
  currentPage: number = 1;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.menu$ = this.store.select(state => state.burger.burgers);
  }

  pageChanged(page) {
    this.currentPage = page;
  }
}
