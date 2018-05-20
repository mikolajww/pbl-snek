import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {Post} from '../model/post';

@Injectable()
export class UserService {

  users:User[] = [
    new User("Sneiker","sneiker@sneiker.sn",0),
    new User("Bneiker","Bneiker@sneiker.sn",1),
    new User("SBeiker","sBeiker@sneiker.sn",2),
    new User("SneiBer","sneiBer@sneiker.sn",3),
    new User("Bokonon","Bokonon@sneiker.sn",4)
  ];
  constructor() { }

  getAllUsers() {
    return this.users;
  }

  getUser(index:number){
    return this.users[index];
  }

}
