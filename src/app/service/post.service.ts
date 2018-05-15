import { Injectable } from '@angular/core';
import {Post} from '../model/post';
import {UserService} from './user.service';

@Injectable()
export class PostService {

  private postList:Post[];
  constructor(private userService:UserService) {
    this.postList = [
      new Post("Help me solve this integral ",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
               Accusantium ad adipisci animi, aperiam consequuntur culpa deserunt doloremque ducimus,\
               fuga id impedit iure magni nobis optio quisquam quo sapiente sed vitae.",["Math","Integral","Calculus"],userService.getUser(0),true),
      new Post("Where and when does Dr.X have consultation hours?  ",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
               Accusantium ad adipisci animi, aperiam consequuntur culpa deserunt doloremque ducimus,\
               fuga id impedit iure magni nobis optio quisquam quo sapiente sed vitae.",["Schedules","IFE"],userService.getUser(1),false,3),
      new Post("HELP PLOX I NEED THIS",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
               Accusantium ad adipisci animi, aperiam consequuntur culpa deserunt doloremque ducimus,\
               fuga id impedit iure magni nobis optio quisquam quo sapiente sed vitae.",["C++","FTIMS"],userService.getUser(2),false,-10),
      new Post("What is a NullPointerException",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
               Accusantium ad adipisci animi, aperiam consequuntur culpa deserunt doloremque ducimus,\
               fuga id impedit iure magni nobis optio quisquam quo sapiente sed vitae.",["Java"],userService.getUser(3),true,15),
      new Post("What are the non-trivial zeroes of Riemann zeta function?",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
               Accusantium ad adipisci animi, aperiam consequuntur culpa deserunt doloremque ducimus,\
               fuga id impedit iure magni nobis optio quisquam quo sapiente sed vitae.",["Math","Analysis"],userService.getUser(4),false,300)
    ];
  }

  getAllPosts() {
    return this.postList;
  }
  addPost(post:Post) {

  }
}
