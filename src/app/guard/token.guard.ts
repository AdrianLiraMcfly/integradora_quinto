import { Injectable } from '@angular/core';
import { CanActivateFn ,CanActivate, Router, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class tokenGuard implements CanActivate{
  constructor(private router: Router, private auth:AuthService) { }
  canActivate(
    route:ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.auth.isauth().pipe(
        map(response => {
          if (response.status === 200) {
            // Navega a la página de inicio si se detecta un token
            this.router.navigate(['/home']);
            return false; // Retorna false para cancelar la navegación original
          } else if (response.status === 401) {
            this.router.navigate(['/login']);
            return false;
          }
          return false;
        }),
        catchError(error => {
          console.error(error);
          this.router.navigate(['/login']);
          return of(false);
        })
      );
    }
};
