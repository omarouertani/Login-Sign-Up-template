import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private validCredentials = {
    email: 'admin@example.com',
    password: 'admin'
  };

  login(email: string, password: string): boolean {
    if (email === this.validCredentials.email && password === this.validCredentials.password) {
      localStorage.setItem('user', email);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('user') !== null;
  }
}
