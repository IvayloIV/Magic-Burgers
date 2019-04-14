import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TopBurgers } from '../models/burger/top-burgers.model';
import { BurgerInfo } from '../models/burger/burger-info.model';
import { BurgerDetails } from '../models/burger/burger-details.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { tap } from 'rxjs/operators';
import { LikeBurger, DislikeBurger } from 'src/app/store/actions/burger.action';
import { BurgerCreate } from '../models/burger/burger-create.model';

const BASE_URL = 'http://localhost:5000/burger/';

@Injectable({
  providedIn: 'root'
})
export class BurgerService {
  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  getTopBurgers(): Observable<TopBurgers> {
      return this.http.get<TopBurgers>(BASE_URL + 'top');
  }

  getMenu(): Observable<BurgerInfo[]> {
    return this.http.get<BurgerInfo[]>(BASE_URL + 'all');
  }

  getDetails(id: string): Observable<BurgerDetails> {
    return this.http.get<BurgerDetails>(BASE_URL + `details/${id}`);
  }

  likeBurger(burgerId: string, userId: string): Observable<BurgerDetails> {
    return this.http.patch<BurgerDetails>(BASE_URL + `like/${burgerId}`, {})
      .pipe(tap(() => {
        this.store.dispatch(new LikeBurger(userId));
      }));
  }

  dislikeBurger(burgerId: string, userId: string): Observable<BurgerDetails> {
    return this.http.patch<BurgerDetails>(BASE_URL + `dislike/${burgerId}`, {})
      .pipe(tap(() => {
        this.store.dispatch(new DislikeBurger(userId));
      }));
  }

  createBurger(body: BurgerCreate) {
    return this.http.post(BASE_URL + 'create', body);
  }
}
