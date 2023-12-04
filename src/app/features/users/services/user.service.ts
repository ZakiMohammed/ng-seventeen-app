import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<User[]>(this.baseUrl);
  }

  getById(id: number) {
    return this.http.get<User>(`${this.baseUrl}${id}`);
  }
}
