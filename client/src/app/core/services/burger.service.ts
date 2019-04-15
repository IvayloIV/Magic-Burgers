import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.state';

import { LikeBurger, DislikeBurger } from 'src/app/store/actions/burger.action';
import { TopBurgers } from '../models/burger/top-burgers.model';
import { BurgerInfo } from '../models/burger/burger-info.model';
import { BurgerDetails } from '../models/burger/burger-details.model';
import { BurgerCreate } from '../models/burger/burger-create.model';

const BASE_URL = 'http://localhost:5000/burger/';

const TOP_BURGERS_URL = BASE_URL + 'top';
const ALL_BURGERS_URL = BASE_URL + 'all';
const DETAILS_BURGER_URL = BASE_URL + 'details/';
const LIKE_BURGER_URL = BASE_URL + 'like/';
const DISLIKE_BURGER_URL = BASE_URL + 'dislike/';
const CREATE_BURGER_URL = BASE_URL + 'create';

@Injectable({
  providedIn: 'root'
})
export class BurgerService {
  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  getTopBurgers(): Observable<TopBurgers> {
      return this.http.get<TopBurgers>(TOP_BURGERS_URL);
  }

  getMenu(): Observable<BurgerInfo[]> {
    return this.http.get<BurgerInfo[]>(ALL_BURGERS_URL);
  }

  getDetails(id: string): Observable<BurgerDetails> {
    return this.http.get<BurgerDetails>(DETAILS_BURGER_URL + id);
  }

  likeBurger(burgerId: string, userId: string): Observable<BurgerDetails> {
    return this.http.patch<BurgerDetails>(LIKE_BURGER_URL + burgerId, {})
      .pipe(tap(() => {
        this.store.dispatch(new LikeBurger(userId));
      }));
  }

  dislikeBurger(burgerId: string, userId: string): Observable<BurgerDetails> {
    return this.http.patch<BurgerDetails>(DISLIKE_BURGER_URL + burgerId, {})
      .pipe(tap(() => {
        this.store.dispatch(new DislikeBurger(userId));
      }));
  }

  createBurger(body: BurgerCreate) {
    return this.http.post(CREATE_BURGER_URL, body);
  }
}
