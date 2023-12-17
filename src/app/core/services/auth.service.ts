import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../features/users/models/user';
import { map, of } from 'rxjs';
import { Router } from '@angular/router';
import { MESSAGE_CONSTANTS } from '../constants/message.constant';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/users/';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  public get User() {
    try {
      const item = localStorage.getItem('user');
      if (item) {
        return JSON.parse(item) as User;
      }
    } catch {
      console.log(MESSAGE_CONSTANTS.NO_USER);
    }
    return null;
  }

  isLoggedIn(): boolean {
    return !!this.User;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  login(username: string, password: string) {
    return this.http.get<User[]>(this.baseUrl).pipe(
      map((users) => {
        const user = users.find((u) => u.username === username && u.email === password);
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
        }
        return user;
      }),
    );
  }

  authorized() {
    if (!this.User) {
      return of(false);
    }

    const url = `${this.baseUrl}${this.User?.id}`;
    return this.http.get<User>(url).pipe(map((user) => !!user));
  }
}
