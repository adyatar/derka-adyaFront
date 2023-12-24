import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, mapTo, of, tap } from 'rxjs';
import { environment } from '../../../environment';
import { Router } from '@angular/router';
import {jwtDecode} from 'jwt-decode';
import { CartItem } from '../../models/cartItem.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = new BehaviorSubject<boolean>(false);
  private userRole = new BehaviorSubject<string>('');
  private authTokenKey  = 'Bearer Token';
  private apiUrl = environment.authService;
  private authToken!:string

  constructor(private http:HttpClient,private router:Router) { 
    this.isAuthenticated.next(!!localStorage.getItem(this.authTokenKey));
  }

  login(email: string, password: string): Observable<boolean> {
    const body = new URLSearchParams();
    body.set('email', email);
    body.set('password', password);
    body.set('grantType', 'password');
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return this.http.post<any>(`${this.apiUrl}/token`, body.toString(), { headers }).pipe(
      tap(response => {
        this.handleLogin(response);
      }),
      catchError(error => {
        console.error('Login error:', error);
        return of(false);
      })
    );
  }

  private handleLogin(response: any) {
    this.authToken = response.accessToken;
    localStorage.setItem(this.authTokenKey, this.authToken);
    this.userRole.next(response.scope);
    this.isAuthenticated.next(true);
  
    this.mergeCarts();
  }

  private mergeCarts() {
    const unauthCartData = localStorage.getItem('cart_unauthenticated');
    const userId = this.getUserId();
    if (unauthCartData && userId) {
      const unauthCart: CartItem[] = JSON.parse(unauthCartData);
      const authCartKey = `cart_${userId}`;
      const authCartData = localStorage.getItem(authCartKey);
      const authCart: CartItem[] = authCartData ? JSON.parse(authCartData) : [];
      const mergedCart = [...authCart, ...unauthCart];
      localStorage.setItem(authCartKey, JSON.stringify(mergedCart));
      localStorage.removeItem('cart_unauthenticated');
    }
  }

  isAuthenticatedUser(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }


  logout() {
    localStorage.removeItem(this.authTokenKey);
    this.isAuthenticated.next(false);
    this.router.navigate(['/login']); 
  }


  getUserRole(): Observable<string> {
    return this.userRole.asObservable();
}

  getToken(){
    return this.authToken;
  }


  getUserId(): string | null {
    const token = localStorage.getItem(this.authTokenKey);
    if (token) {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.userId;
    }
    return null;
  }

}



