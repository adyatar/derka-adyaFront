import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of, tap } from 'rxjs';
import { environment } from '../../../environment';
import { Router } from '@angular/router';
import {jwtDecode} from 'jwt-decode';
import { CartItem } from '../../models/cartItem.model';
import { TokenRequest } from '../../models/tokenrequest.model';
import { UserRequest } from '../../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = new BehaviorSubject<boolean>(false);
  private userRole = new BehaviorSubject<string>('');
  private authTokenKey  = 'token';
  private apiUrl = environment.authService;
  private authToken!:string

  constructor(private http:HttpClient,private router:Router) { 
    this.isAuthenticated.next(!!localStorage.getItem(this.authTokenKey));
    this.loadUserRoleFromToken();

  }

  login(email: string, password: string): Observable<boolean> {
    const requestData: TokenRequest = {
      grantType: 'password',
      email: email,
      password: password,
    };
    return this.http.post<any>(`${this.apiUrl}/token`, requestData).pipe(
      tap(response => {
        this.handleLogin(response);
        this.redirectUserBasedOnRole();
      }),
      catchError(error => {
        console.error('Login error:', error);
        return of(false);
      })
    );
  }

  private redirectUserBasedOnRole() {
    const role = this.userRole.getValue();
    if (role === 'ADMIN') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/account']);
    }
  }

  private handleLogin(response: any) {
    this.authToken = response.accessToken;
    localStorage.setItem(this.authTokenKey, this.authToken);
    this.isAuthenticated.next(true);
    this.loadUserRoleFromToken();
    this.mergeCarts();
  }

  private loadUserRoleFromToken() {
    const token = localStorage.getItem(this.authTokenKey);
    if (token) {
      const decodedToken = jwtDecode<any>(token);
      const userRole = decodedToken.scope;
      this.userRole.next(userRole);
      this.isAuthenticated.next(true);
    }
  }

  private mergeCarts() {
    const unauthCartData = localStorage.getItem('cart_0');
    const userId = this.getUserId();
    if (unauthCartData && userId) {
      const unauthCart: CartItem[] = JSON.parse(unauthCartData);
      const authCartKey = `cart_${userId}`;
      const authCartData = localStorage.getItem(authCartKey);
      const authCart: CartItem[] = authCartData ? JSON.parse(authCartData) : [];
      for (const unauthItem of unauthCart) {
        const existingItem = authCart.find(authItem => authItem.productId === unauthItem.productId);
        if (existingItem) {
          existingItem.qte += unauthItem.qte;
        } else {
          authCart.push(unauthItem);
        }
      }
      localStorage.setItem(authCartKey, JSON.stringify(authCart));
      localStorage.removeItem('cart_0');
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


  getUserId(): number {
    const token = localStorage.getItem(this.authTokenKey);
    if (token) {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.userId;
    }
     return 0;
  }



  register(email: string, password: string,name:string):Observable<boolean>{
    const requestData: UserRequest = {
      name: name,
      email: email,
      password: password,
    };
    return this.http.post<any>(`${this.apiUrl}/register`, requestData).pipe(
      map(response => true), // Assume success if the request is completed
      catchError(error => {
        console.error('Registration error:', error);
        return of(false);
      })
    );
  }

}



