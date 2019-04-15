import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { OrderCreate } from '../models/order/order-create.model';
import { OrderInfo } from '../models/order/order-info.model';
import { OrderDetails } from '../models/order/order-details.model';

const BASE_URL = 'http://localhost:5000/order/';
const ORDER_CREATE_URL = BASE_URL + 'create/';
const MY_ORDERS_URL = BASE_URL + 'my';
const ORDER_DETAILS_URL = BASE_URL + 'details/';
const ALL_ORDERS_URL = BASE_URL + 'all';
const ORDER_EDIT_URL = BASE_URL + 'edit/';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(
    private http: HttpClient,
  ) { }

  createOrder(body: OrderCreate, burgerId: string) {
    return this.http.post(ORDER_CREATE_URL + burgerId, body);
  }

  getMyOrders(): Observable<OrderInfo[]> {
    return this.http.get<OrderInfo[]>(MY_ORDERS_URL);
  }

  getDetails(orderId: string): Observable<OrderDetails> {
    return this.http.get<OrderDetails>(ORDER_DETAILS_URL + orderId);
  }

  getAllOrders(): Observable<OrderInfo[]> {
    return this.http.get<OrderInfo[]>(ALL_ORDERS_URL);
  }

  changeStatus(burgerId: string, body) {
    return this.http.patch(ORDER_EDIT_URL + burgerId, body);
  } 
}
