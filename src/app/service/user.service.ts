import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {Post} from '../model/post';

@Injectable()
export class UserService {

  users:User[] = [
    new User("Sneiker","sneiker@sneiker.sn"),
    new User("Bneiker","Bneiker@sneiker.sn"),
    new User("SBeiker","sBeiker@sneiker.sn"),
    new User("SneiBer","sneiBer@sneiker.sn"),
    new User("Bokonon","Bokonon@sneiker.sn")
  ];
  constructor() { }

  getAllUsers() {
    return this.users;
  }

  getUser(index:number){
    return this.users[index];
  }

}
