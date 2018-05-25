import {User} from './user';

export class Post {
  title:string;
  description:string;
  solved:boolean;
  id:number;
  votes:number;
  tags:string[];
  comments:string[];
  userId:number;

  constructor(title: string, description: string, tags:string[], userId:number ,solved?: boolean, votes?:number, id? : number) {
    this.title = title;
    this.description = description;
    this.solved = solved || false;
    this.votes = votes || 0;
    this.id = id;
    this.tags = tags;
    this.comments = [];
    this.userId = userId;
  }
}
