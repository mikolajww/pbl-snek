import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {NewPost} from '../model/new-post';
import 'rxjs/add/operator/map';
import {tap} from 'rxjs/operators';
import {Post} from '../model/post';

@Injectable()
export class PostHttpService {

  private apiUrl = 'http://localhost:3000/api/posts'
  constructor(private http:HttpClient) { }

  getAllPosts():Observable<any> {
    console.log('get all posts');
    return this.http.get<Post[]>(this.apiUrl).pipe(tap(r=>console.log(r)));
  }


  addPost(newPost:NewPost) {
    const header = new HttpHeaders().set('Content-Type','application/json');

    const auth = localStorage.getItem("accessKey");
    console.log(newPost);
    return this.http.post<Post>(`${this.apiUrl}?access_token=${auth}`,newPost,{headers: header})
  }


}
