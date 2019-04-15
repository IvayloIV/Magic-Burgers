import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ToppingInfo } from '../models/topping/topping-info.model';
import { ToppingCreate } from '../models/topping/topping-create.model';

const BASE_URL = 'http://localhost:5000/topping/';
const ALL_TOPPINGS_URL = BASE_URL + 'all';
const TOPPING_CREATE = BASE_URL + 'create';

@Injectable({
  providedIn: 'root'
})
export class ToppingService {
  constructor(
    private http: HttpClient,
  ) { }

  getAllToppings(): Observable<ToppingInfo[]> {
    return this.http.get<ToppingInfo[]>(ALL_TOPPINGS_URL);
  }

  createTopping(body: ToppingCreate) {
    return this.http.post(TOPPING_CREATE, body);
  }
}
