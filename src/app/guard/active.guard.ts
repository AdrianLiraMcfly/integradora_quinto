import { Injectable } from '@angular/core';
import { CanActivateFn ,CanActivate, Router, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

export class ActiveGuard implements CanActivate{
  constructor(private router: Router, private auth:AuthService) { }
  canActivate(
    route:ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.auth.me().pipe(
        map((HttpResponse: any) => {
          if (HttpResponse.body.status === 1) {
            return true;
          } else if(HttpResponse.body.status === 0){
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
}