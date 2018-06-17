import {User} from './user';
import {Vote} from "./vote";

export class Post {
  title:string;
  description:string;
  solved:boolean;
  id:string;
  votes: Vote[];
  votesObtained: number;
  tags:string[];
  comments:Comment[];
  userId:string;
  date:Date;

  constructor(title: string, description: string, tags:string[], userId:string , date?:Date, solved?: boolean, id? : string) {
    this.title = title;
    this.description = description;
    this.solved = solved || false;
    this.votes = [];
    this.votesObtained = 0;
    this.date = date || new Date();
    this.id = id;
    this.tags = tags;
    this.comments = [];
    this.userId = userId;
  }
}
