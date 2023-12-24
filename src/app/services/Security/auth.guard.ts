import { CanActivateFn,Router,RouterStateSnapshot,ActivatedRouteSnapshot } from '@angular/router';
import {inject} from '@angular/core'
import { AuthService } from '../../services/Security/auth.service'; // Adjust the path as necessary


export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const router :Router = inject(Router);
  const auth:AuthService = inject(AuthService)
  if (!auth.isAuthenticatedUser()) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
