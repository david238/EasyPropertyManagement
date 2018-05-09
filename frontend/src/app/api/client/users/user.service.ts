import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { random } from 'lodash';
import { APIConfig } from '../api.config';
import { Router } from '@angular/router';


const USERS_PATH = `${APIConfig.BASE_API_PATH}/api/users`;
const USERS_SIGNUP_PATH = `${APIConfig.BASE_API_PATH}/api/users/signup`;
const USERS_SIGNIN_PATH = `${APIConfig.BASE_API_PATH}/api/users/signin`;

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
  private selectedUser_id = '';
  private userRet = '';

  constructor(
    private http: HttpClient, private router: Router
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

  // getUsers() {
  //   return this.users;
  // }

  addUser(fn, ln, em, pwd) {
    this.insertUser(fn, ln, em, pwd).subscribe(
      gen_id => {
        this.user_id =  gen_id;
      });
  }

  public insertUser(fn, ln, em, pwd) {
    const newUser: User = {firstname: fn , lastname: ln, email: em, password: pwd};
    console.log(newUser);
    console.log(JSON.stringify(newUser));
    console.log('inside insert User ' + newUser.firstname);
    return this.http.post(USERS_SIGNUP_PATH, newUser, {responseType: 'text'});
  }


  signin(em, pwd) {
    this.signInUser(em, pwd).subscribe(
      user => {
        this.userRet =  user;
        console.log(this.userRet);
        if (this.userRet !== 'error')
        {
          localStorage.setItem('token', this.userRet);
          localStorage.setItem('email', em);
          localStorage.setItem('userId', this.selectedUser_id);
          this.router.navigateByUrl('/properties');
        }
      });
  }

  public signInUser(em, pwd) {
    this.users.filter((user) => {
      if (user.email === em) {
        this.selectedUser_id = user._id;
      }

    });
    const newUser: User = {_id: this.selectedUser_id, email: em, password: pwd};
    return this.http.post(USERS_SIGNIN_PATH, newUser, {responseType: 'text'});
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }
}
