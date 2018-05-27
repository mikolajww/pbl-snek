import { Injectable } from '@angular/core';
import {NewPost} from "../model/new-post";
import {tap} from "rxjs/operators";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {NewComment} from "../model/new-comment";

@Injectable()
export class CommentService {
  private apiUrl = 'http://localhost:3000/api/posts'

  constructor(private http: HttpClient) {
  }

  getComments(id: string): Observable<any> {
    console.log('get comments for id: ',id);
    const trueUrl = `${this.apiUrl}/${id}/comments`;
    return this.http.get<Comment[]>(trueUrl).pipe(tap(r => console.log(r)));
  }


  addComment(newComment: NewComment, id: string) {
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    const trueUrl = `${this.apiUrl}/${id}/comments`;
    const auth = localStorage.getItem("accessKey");
    console.log(newComment);
    return this.http.post<Comment>(`${trueUrl}?access_token=${auth}`, newComment, {headers: header}).subscribe(
      r => console.log(r),
      err => console.log(err)
    );

  }
}
