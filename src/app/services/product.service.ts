import { Injectable } from '@angular/core';
import { Product} from '../models/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
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

  nbrProducts():Observable<number>{
    return this.http.get<number>(`${this.apiUrl}/products/nbr`);
  }

  //synch mabin info w prod
  private productChangeSubject = new Subject<void>();
  productChanged$ = this.productChangeSubject.asObservable();

  notifyProductChange() {
    this.productChangeSubject.next();
  }
}
