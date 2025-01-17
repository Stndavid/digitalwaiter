import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users = [
    { username: 'admin', password: 'admin123' },
    { username: 'user', password: 'user123' },
  ];

  login(username: string, password: string): boolean {
    return this.users.some(
      (user) => user.username === username && user.password === password
    );
  }

  register(username: string, password: string): boolean {
    const userExists = this.users.some((user) => user.username === username);
    if (!userExists) {
      this.users.push({ username, password });
      return true;
    }
    return false;
  }
}
