import {PostService} from '../service/post.service';

export class NewPost {
  title:string;
  description:string;
  tags:string[];
  userId:string;

  constructor(title?: string, body?: string, tags?: string[], userId?: string) {
    this.title = title || "";
    this.description = body || "";
    this.tags = tags || [];
    this.userId = userId || "";
  }
}
