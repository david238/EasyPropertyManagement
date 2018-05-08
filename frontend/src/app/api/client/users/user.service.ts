import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { random } from 'lodash';
import { APIConfig } from '../api.config';

const USERS_PATH = `${APIConfig.BASE_API_PATH}/api/users`;

export interface User {
  _id?: string; // Assigned automatically by datastore
  firstname?: string;
  lastname?: string;
  email: string;
  password: string;
}

@Injectable()
export class UserService {

  private users: User[] = [];
  private user_id = '';

  constructor(
    private http: HttpClient
  ) {
    this.loadUsers();
  }

  loadUsers() {
    this.queryUsers()
      .subscribe(users => {
        this.users = users;
      });
  }

  public queryUsers(
    query: any = {},
    params: { limit: number; offset: number } = { limit: 10, offset: 0 }
  ): Observable<User[]> {
    return this.http.get<User[]>(USERS_PATH, {
      params: {
        limit: `${params.limit}`,
        offset: `${params.offset}`
      }
    });
  }

  public insertUser(fn, ln, em, pwd) {
    const newUser: User = {firstname: fn , lastname: ln, email: em, password: pwd};
    console.log(newUser);
    console.log(JSON.stringify(newUser));
    console.log('inside insert User ' + newUser.firstname);
    return this.http.post(USERS_PATH, newUser, {responseType: 'text'});

  }

  getProperties() {
    return this.users;
  }

  addUser(fn, ln, em, pwd) {
    this.insertUser(fn, ln, em, pwd).subscribe(
      gen_id => {
        this.user_id =  gen_id;
      });
    const newProp: User = {_id: this.user_id , firstname: fn, lastname: ln, email: em, password: pwd};
    this.users.push(newProp);
  }

}
