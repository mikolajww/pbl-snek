import {PostService} from '../service/post.service';

export class NewPost {
  title:string;
  body:string;
  id:number;
  tags:string[];
  userId:number;

  constructor(title?: string, body?: string, id?: number, tags?: string[], userId?: number) {
    this.title = title || "";
    this.body = body || "";
    this.id = id || 0;
    this.tags = tags || [];
    this.userId = userId || 0;
  }
}
