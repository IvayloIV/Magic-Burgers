import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderCreate } from '../models/order/order-create.model';
import { Observable } from 'rxjs';
import { OrderInfo } from '../models/order/order-info.model';
import { OrderDetails } from '../models/order/order-details.model';

const BASE_URL = 'http://localhost:5000/order/';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(
    private http: HttpClient,
  ) { }

  createOrder(body: OrderCreate, burgerId: string) {
    return this.http.post(BASE_URL + `create/${burgerId}`, body);
  }

  getMyOrders(): Observable<OrderInfo[]> {
    return this.http.get<OrderInfo[]>(BASE_URL + 'my');
  }

  getDetails(orderId: string): Observable<OrderDetails> {
    return this.http.get<OrderDetails>(BASE_URL + `details/${orderId}`);
  }

  getAllOrders(): Observable<OrderInfo[]> {
    return this.http.get<OrderInfo[]>(BASE_URL + 'all');
  }
}
