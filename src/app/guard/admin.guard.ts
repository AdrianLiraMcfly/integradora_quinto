import { CanActivateFn } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivate{
  constructor(private router: Router, private auth:AuthService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.checkRol().pipe(
      map(response => {
        if(response.body === 2){
          return true;
        }
        else if(response.body === 1){
          this.router.navigate(['/home']);
          return false;
        }
        return false;
      })
    );
  }
}