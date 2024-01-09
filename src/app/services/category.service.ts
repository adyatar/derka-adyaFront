import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  private apiUrl = environment.gatewayApiUrlCatalog;
  
  getAllCategories() : Observable<Category[]>{
    return this.http.get<Category[]>(`${this.apiUrl}/categories`);
 }

 addCategory(category:Category):Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  return this.http.post(`${this.apiUrl}/category`, category, httpOptions)
 }

 DeleteCategory(idCat:number):Observable<any>
 {
    return this.http.delete(`${this.apiUrl}/category/${idCat}`)
 }

}
