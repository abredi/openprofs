import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {UserToken} from '../user-token';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private permissions: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,  
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    if (this.permissions.canActivate(route.params.id)) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
