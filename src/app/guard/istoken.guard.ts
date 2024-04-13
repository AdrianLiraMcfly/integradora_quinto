import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class istokenGuard implements CanActivate {
  constructor(private router: Router, private auth:AuthService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.auth.isauth().pipe(
        map(response => {
          if (response.status === 200) {
            // Si el usuario ya está autenticado, redirige a la página de inicio
            this.router.navigate(['/home']);
            return false; // No permitir la navegación a la página de inicio de sesión o registro
          } else if(response.status === 401){
            return true; // Permitir la navegación a la página de inicio de sesión o registro
          }
          return true;
        }),
        catchError(error => {
          console.error(error);
          // En caso de error, permitir la navegación a la página de inicio de sesión o registro
          return of(true);
        })
      );
    }
};
