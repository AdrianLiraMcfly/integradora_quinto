import { Injectable } from '@angular/core';
import { CanActivateFn ,CanActivate, Router, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class activeGuard implements CanActivate{
  constructor(private router: Router, private auth:AuthService) { }
  canActivate(
    route:ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.auth.checkActive().pipe(
        map(response => {
          if(response.body === 1){
            return true;
          }
          else if(response.body === 0){
            localStorage.removeItem('token');
            localStorage.removeItem('userEmail');
            this.router.navigate(['/login']);
            return false;
          }
          return false;
        }),
        catchError(error => {
          console.log(error);
          this.router.navigate(['/login']);
          return of(false);
        })
        )
    }
}