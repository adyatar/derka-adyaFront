import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { catchError, map, of, take } from 'rxjs';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  const requiredRole = route.data['role'];
  return authService.getUserRole().pipe(
    take(1),
    map(userRole => {
      if (userRole === requiredRole) {
        return true;
      } else {
        router.navigate(['/unauthorized']); // Redirect as appropriate
        return false;
      }
    }),
    catchError(() => {
      router.navigate(['/login']);
      return of(false);
    })
  );

  
};
