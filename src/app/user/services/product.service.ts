import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
         //
         private apiUrl = 'http://localhost:8888/CATALOG-SERVICE';
  constructor(private http:HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  getProductById(id: number): Observable<Product> {
    // Adjust the URL path according to your backend endpoint
    return this.http.get<Product>(`${this.apiUrl}/product/${id}`);
  }

  /*private products: Product[] = [
    { id:1,img: 'assets/images/apple.png',brand:'Apple',name:'IPhone 15 Pro Max',price:'$ 1,099.00',discount:'800' },
    { id:2,img: 'assets/images/applewatch.png',brand:'Apple',name:'Apple Watch Serie 9',price:'$ 300.00',discount:'' },
    { id:3,img: 'assets/images/beats.jpg',brand:'Beats',name:'Studio3 Wireless',price:'$ 190.00',discount:'' },
    { id:4,img: 'assets/images/huawei.png',brand:'Huawei',name:'Watch GT4 46mm',price:'$ 270.00',discount:'' },
    { id:5,img: 'assets/images/ps4.png',brand:'PlayStation',name:'Ps4 Slim 500Go',price:'$ 390.00',discount:'' },
    { id:6,img: 'assets/images/ps5console.png',brand:'PlayStation',name:'Ps5 1Tb',price:'$ 800.00',discount:'' },
    { id:7,img: 'assets/images/ps5manette.jpg',brand:'PlayStation',name:'Ps5 Remote Army',price:'$ 60.00',discount:'' },
    { id:7,img: 'assets/images/ps5manette.jpg',brand:'PlayStation',name:'Ps5 Remote Army',price:'$ 60.00',discount:'' },
    { id:7,img: 'assets/images/ps5manette.jpg',brand:'PlayStation',name:'Ps5 Remote Army',price:'$ 60.00',discount:'' },
    { id:7,img: 'assets/images/ps5manette.jpg',brand:'PlayStation',name:'Ps5 Remote Army',price:'$ 60.00',discount:'' },
    { id:7,img: 'assets/images/ps5manette.jpg',brand:'PlayStation',name:'Ps5 Remote Army',price:'$ 60.00',discount:'' },
    { id:7,img: 'assets/images/ps5manette.jpg',brand:'PlayStation',name:'Ps5 Remote Army',price:'$ 60.00',discount:'' },
    { id:7,img: 'assets/images/ps5manette.jpg',brand:'PlayStation',name:'Ps5 Remote Army',price:'$ 60.00',discount:'' },
    { id:7,img: 'assets/images/ps5manette.jpg',brand:'PlayStation',name:'Ps5 Remote Army',price:'$ 60.00',discount:'' },
    { id:7,img: 'assets/images/ps5manette.jpg',brand:'PlayStation',name:'Ps5 Remote Army',price:'$ 60.00',discount:'' },
    { id:7,img: 'assets/images/ps5manette.jpg',brand:'PlayStation',name:'Ps5 Remote Army',price:'$ 60.00',discount:'' },
    { id:7,img: 'assets/images/ps5manette.jpg',brand:'PlayStation',name:'Ps5 Remote Army',price:'$ 60.00',discount:'' },
    { id:7,img: 'assets/images/ps5manette.jpg',brand:'PlayStation',name:'Ps5 Remote Army',price:'$ 60.00',discount:'' },
    { id:7,img: 'assets/images/ps5manette.jpg',brand:'PlayStation',name:'Ps5 Remote Army',price:'$ 60.00',discount:'' },
    { id:7,img: 'assets/images/ps5manette.jpg',brand:'PlayStation',name:'Ps5 Remote Army',price:'$ 60.00',discount:'' },
  ];*/

  /*getHomePageProducts(): Product[] {
    return this.products;
  }*/


}
