import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {Post} from '../model/post';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class UserService {
  readonly apiUrl = 'http://localhost:3000/api';
  loggedIn = false;
  user:any;
  constructor(private http: HttpClient) { }

  getUser(id:string, accessToken:string) {
    const header = new HttpHeaders().set('Authorization',localStorage.getItem("accessKey"));
    return this.http.get(`${this.apiUrl}/Users/${localStorage.getItem("userId")}`,{headers: header});
  }
  getForeignUser(id: string) {
    const header = new HttpHeaders().set('Authorization',localStorage.getItem("accessKey"));
    return this.http.get(`${this.apiUrl}/Users/${localStorage.getItem("userId")}`);
  }
  loginUser(email:string, password:string) {
    this.http.post<any>(`${this.apiUrl}/Users/login`,{"email":email, "password":password}).subscribe(r => {
      console.log(`recieved access key ${r.id}`);
      localStorage.setItem("accessKey",r.id);
      localStorage.setItem("userId", r.userId);
      localStorage.setItem("loggedin", "true");
      this.loggedIn = true;
      this.getUser(localStorage.getItem("userId"), localStorage.getItem("accessKey")).subscribe(r =>  {
        this.user = r;
        console.log(this.user);
        return true;
      });
    },
    err => {
      console.log('incorrect credentials');
      return false;
    });
  }

  logout() {
    const auth = localStorage.getItem("accessKey");
    this.http.post<any>(`${this.apiUrl}/Users/logout?access_token=${auth}`,{}).subscribe(() => {
      localStorage.removeItem("accessKey");
      localStorage.removeItem("userId");
      localStorage.removeItem("loggedin");
      console.log("logged out");
      this.loggedIn = false;
    });
  }

  isLoggedIn():boolean {
    return localStorage.getItem("accessKey") !== null;
  }
}




