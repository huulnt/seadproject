import { Injectable } from '@angular/core';
import decode from 'jwt-decode';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  public getToken(): string {
    localStorage.setItem('token', 'dXNlcjFAdGhlZGlnaXRhbHN0YWNrLmNvbTpwYXNzd29yZA==');
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    return tokenNotExpired(null, token);
  }
}
