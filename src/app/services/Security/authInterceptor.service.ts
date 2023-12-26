import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}
  
    intercept(
      request: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      const authToken = localStorage.getItem("token")
      if (authToken) {
        const authRequest = request.clone({
          setHeaders: {
            'Accept': 'application/json',
            Authorization: `Bearer ${authToken}`
          }
        });
        return next.handle(authRequest);
      } else {
        return next.handle(request);
      }
    }
  }