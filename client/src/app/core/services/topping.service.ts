import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToppingInfo } from '../models/topping/topping-info.model';

const BASE_URL = 'http://localhost:5000/topping/';

@Injectable({
  providedIn: 'root'
})
export class ToppingService {
  constructor(
    private http: HttpClient,
  ) { }

  getToppingsInfo(): Observable<ToppingInfo[]> {
      return this.http.get<ToppingInfo[]>(BASE_URL + 'all');
  }
}
