import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { BurgerDetails } from 'src/app/core/models/burger/burger-details.model';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { BurgerService } from 'src/app/core/services/burger.service';

@Component({
  selector: 'app-burger-details',
  templateUrl: './burger-details.component.html',
  styleUrls: ['./burger-details.component.css']
})
export class BurgerDetailsComponent implements OnInit {
  burger$: Observable<BurgerDetails>;
  isAuth: boolean;
  userId: string;

  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    private burgerService: BurgerService
  ) { }

  ngOnInit() {
    this.burger$ = this.store.select(state => state.burger.burgerDetails);
    this.isAuth = this.authService.isAuthenticated();
    this.userId = localStorage.getItem('userId');
  }

  likeBurger(id: string) {
    this.burgerService.likeBurger(id, this.userId).subscribe();
  }
  
  dislikeBurger(id: string) {
    this.burgerService.dislikeBurger(id, this.userId).subscribe();
  }
}
