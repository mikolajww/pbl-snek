import {Vote} from "./vote";

export class Comment{
  body:string;
  id:string;
  votes: Vote[];
  votesObtained: number;
  published:Date;
  userId:string;
  postId:string;

  constructor(body: string, userId: string, postId: string, id?: string, published?: Date) {
    this.body = body;
    this.id = id;
    this.votes = [];
    this.votesObtained = 0;
    this.published = published || new Date();
    this.userId = userId;
    this.postId = postId;
  }
}
