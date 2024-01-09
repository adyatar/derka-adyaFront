import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = environment.orderService;

  constructor(private http:HttpClient) { }

getAllOrdersByUserId():Observable<Order[]>{
  return this.http.get<Order[]>(`${this.apiUrl}/userOrders`)
}

getTotalOrders():Observable<number>{
  return this.http.get<number>(`${this.apiUrl}/orders/count`)
}
getOrdersMoney():Observable<number>{
  return this.http.get<number>(`${this.apiUrl}/orders/money`)
}


}
