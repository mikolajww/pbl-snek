import {PostService} from '../service/post.service';

export class NewPost {
  title:string;
  description:string;
  id:string;
  tags:string[];
  userId:string;

  constructor(title?: string, body?: string, id?: string, tags?: string[], userId?: string) {
    this.title = title || "";
    this.description = body || "";
    this.id = id || "";
    this.tags = tags || [];
    this.userId = userId || "";
  }
}
