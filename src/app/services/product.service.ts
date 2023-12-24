import { Injectable } from '@angular/core';
import { Product} from '../models/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private apiUrl = environment.gatewayApiUrlCatalog;

  constructor(private http:HttpClient) { }
  

  getAllProducts() : Observable<Product[]>{
     return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/product/${id}`);
  }

  getAllProductsByCategory(id:number) : Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiUrl}/products/${id}`);
   } 
}
