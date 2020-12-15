import { Injectable } from '@angular/core';
import { UserToken } from '../user-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // user: UserToken;
  constructor() { }

  canActivate(id: string): boolean {
    const isLoggedIn = JSON.parse(localStorage.getItem('logged_in') || 'false');
    return isLoggedIn;
  }
}
