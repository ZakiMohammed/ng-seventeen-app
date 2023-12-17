import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);

  return authService.authorized().pipe(
    map((result) => {
      if (result) {
        return true;
      } else {
        authService.logout();
        return false;
      }
    }),
    catchError(() => of(false)),
  );
};
