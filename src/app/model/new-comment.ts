export class NewComment {
  body:string;
  userId:string;
  postId:string;


  constructor(body?: string, userId?: string, postId?: string) {
    this.body = body || "";
    this.userId = userId || "";
    this.postId = postId || "";
  }
}
