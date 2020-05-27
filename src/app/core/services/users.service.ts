import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'https://jsonplaceholder.typicode.com/users';
  public user: User;

  constructor(public http: HttpClient) { }

  getUsers(): Observable<User[]> {
    const url = this.url;
    return this.http.get<any>(url).pipe(map(response => response))
      .pipe(map(users => users.map(user => new User(user)))
    );
  }

  getUser() {
    return this.user;
  }

  public setUser(user: User) {
    this.user = user;
  }
}
