import { Injectable } from '@angular/core';
import { Product} from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private http:HttpClient) { }
  
  private apiUrl = environment.gatewayApiUrlCatalog;

  getAllProducts() : Observable<Product[]>{
     return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  getProductById(id: number): Observable<Product> {
    // Adjust the URL path according to your backend endpoint
    return this.http.get<Product>(`${this.apiUrl}/product/${id}`);
  }
}
