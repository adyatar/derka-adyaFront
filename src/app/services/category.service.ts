import { HttpClient } from '@angular/common/http';
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


 getCategoryById(id:number) : Observable<any>{
  return this.http.get<any>(`${(this.apiUrl)}/category/`+id);
 } 

}
