import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from '../models/user/user-profile.model';

const BASE_URL = 'http://localhost:5000/user/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient,
  ) { }

  getUserProfile(username: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(BASE_URL + `profile/${username}`);
  }
}
