import { CanActivateFn,Router,RouterStateSnapshot,ActivatedRouteSnapshot } from '@angular/router';
import {inject} from '@angular/core'
import { AuthService } from './auth.service'; // Adjust the path as necessary


export const checkoutGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const router :Router = inject(Router);
  const auth:AuthService = inject(AuthService)
  const userId = auth.getUserId();
  const cartKey = userId ? `cart_${userId}` : 'cart_0';
  const cartData = localStorage.getItem(cartKey);
  if (!cartData || cartData === '[]') {
      router.navigate(['/cart']); 
      return false;
  }
  return true;
};
