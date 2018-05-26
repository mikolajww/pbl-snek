import {User} from './user';

export class Post {
  title:string;
  description:string;
  solved:boolean;
  id:string;
  votes:number;
  tags:string[];
  comments:string[];
  userId:string;
  date:Date;

  constructor(title: string, description: string, tags:string[], userId:string , date?:Date, solved?: boolean, votes?:number, id? : string) {
    this.title = title;
    this.description = description;
    this.solved = solved || false;
    this.votes = votes || 0;
    this.date = date || new Date();
    this.id = id;
    this.tags = tags;
    this.comments = [];
    this.userId = userId;
  }
}
