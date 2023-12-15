import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../features/users/models/user';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private http: HttpClient) {}

  isLoggedIn(): boolean {
    const user = localStorage.getItem('user');
    return !!user;
  }

  login(username: string, password: string) {
    return this.http.get<User[]>(this.baseUrl).pipe(
      map(users => {
        const user = users.find(u => u.username === username && u.email === password);
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
        }
        return user;
      })
    );
  }
}
