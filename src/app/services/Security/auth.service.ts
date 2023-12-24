import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, mapTo, of, tap } from 'rxjs';
import { environment } from '../../../environment';
import { Router } from '@angular/router';
import {jwtDecode} from 'jwt-decode';
import { CartItem } from '../../models/cartItem.model';
import { TokenRequest } from '../../models/tokenrequest.model';
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
    this.loadUserRoleFromToken();
    this.isAuthenticated.next(true);
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


  getUserId(): number {
    const token = localStorage.getItem(this.authTokenKey);
    if (token) {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.userId;
    }
     return 0;
  }

}



