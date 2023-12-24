import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivateFn, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateFn {

  constructor(private authService: AuthService, private router: Router) {}

  canActivateFn(): boolean {
    return this.checkAuth();
  }

  private checkAuth(): boolean {
    if (this.authService.isAuthenticatedUser()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}