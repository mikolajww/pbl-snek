import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Post} from '../model/post';
import {NewPost} from '../model/new-post';
import 'rxjs/add/operator/map';
import {tap} from 'rxjs/operators';

@Injectable()
export class PostHttpService {

  private apiUrl = 'http://localhost:3000/api/posts'
  constructor(private http:HttpClient) { }

  getAllPosts():Observable<any> {
    console.log('get all posts');
    return this.http.get<any>(this.apiUrl).map(res => res.data.docs).pipe(tap(r=>console.log(r)));
  }


  addPost(newPost:NewPost) {

  }


}
