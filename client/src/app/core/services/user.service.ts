import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetails } from '../models/user/user-details.model';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { BlockUser, UnblockUser } from 'src/app/store/actions/user.action';
import { UserInfo } from '../models/user/user-info.model';

const BASE_URL = 'http://localhost:5000/user/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  getUserProfile(username: string): Observable<UserDetails> {
    return this.http.get<UserDetails>(BASE_URL + `profile/${username}`);
  }

  getAllUsers(): Observable<UserInfo[]> {
    return this.http.get<UserInfo[]>(BASE_URL + 'all');
  }

  blockUser(userId: string) {
    return this.http.patch(BASE_URL + `block/${userId}`, {})
      .pipe(tap(() => {
        this.store.dispatch(new BlockUser(userId));
      }));
  }

  unblockUser(userId: string) {
    return this.http.patch(BASE_URL + `unblock/${userId}`, {})
      .pipe(tap(() => {
        this.store.dispatch(new UnblockUser(userId));
      }));
  }
}
