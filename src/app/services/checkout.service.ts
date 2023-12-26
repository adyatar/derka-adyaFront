import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './Security/auth.service';
import { Order } from '../models/order.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private apiUrl = environment.orderService;

  constructor(private http: HttpClient) { }


  placeOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.apiUrl}/order`, order);
  }


}
