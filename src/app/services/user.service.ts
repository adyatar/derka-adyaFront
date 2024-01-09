import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.authService;

  constructor(private http:HttpClient) { }

  getUserProfile(id:number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/user/${id}`);
  }
  getNbrUsers():Observable<number>{
    return this.http.get<number>(`${this.apiUrl}/users/nbr`);
  }
}
