import { Injectable } from '@angular/core';
import { Product} from '../models/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  deleteProductById(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/product/${id}`);
  }

  addProduct(product: Product): Observable<any> {
    console.log("f product seervice");
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(`${this.apiUrl}/product`, product, httpOptions);
  }

  updateProduct(product: Product): Observable<any> {
    console.log("f product seervice update");
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(`${this.apiUrl}/product/update`, product, httpOptions);
  }
}
