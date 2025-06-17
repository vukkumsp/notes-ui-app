import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../services/authService/auth-service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService); // Inject your AuthService if needed
  
  
  if (req.url.includes('/api/notes')) {
    const token = authService.getAuthToken(); // Replace with dynamic token if needed

    const modifiedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next(modifiedReq);
  }
  return next(req);
};
