import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { TopBurgers } from 'src/app/core/models/burger/top-burgers.model';
import { topBurgers } from 'src/app/store/selectors/burger.selector';

@Component({
  selector: 'app-burger-home',
  templateUrl: './burger-home.component.html',
  styleUrls: ['./burger-home.component.scss']
})
export class BurgerHomeComponent implements OnInit {
  topBurgers$: Observable<TopBurgers>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.topBurgers$ = this.store.select(topBurgers);
  }

}
