import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.state';

import { UserDetails } from '../models/user/user-details.model';
import { BlockUser, UnblockUser } from 'src/app/store/actions/user.action';
import { UserInfo } from '../models/user/user-info.model';

const BASE_URL = 'http://localhost:5000/user/';
const USER_PROFILE_URL = BASE_URL + 'profile/';
const ALL_USER_URL = BASE_URL + 'all';
const USER_BLOCK_URL = BASE_URL + 'block/';
const USER_UNBLOCK_URL = BASE_URL + 'unblock/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  getUserProfile(username: string): Observable<UserDetails> {
    return this.http.get<UserDetails>(USER_PROFILE_URL + username);
  }

  getAllUsers(): Observable<UserInfo[]> {
    return this.http.get<UserInfo[]>(ALL_USER_URL);
  }

  blockUser(userId: string) {
    return this.http.patch(USER_BLOCK_URL + userId, {})
      .pipe(tap(() => {
        this.store.dispatch(new BlockUser(userId));
      }));
  }

  unblockUser(userId: string) {
    return this.http.patch(USER_UNBLOCK_URL + userId, {})
      .pipe(tap(() => {
        this.store.dispatch(new UnblockUser(userId));
      }));
  }
}
