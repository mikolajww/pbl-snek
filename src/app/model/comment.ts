export class Comment{
  body:string;
  id:string;
  votes:number;
  published:Date;
  userId:string;
  postId:string;

  constructor(body: string, userId: string, postId: string, id?: string, votes?: number, published?: Date) {
    this.body = body;
    this.id = id;
    this.votes = votes;
    this.published = published || new Date();
    this.userId = userId;
    this.postId = postId;
  }
}
