import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {tap} from "rxjs/operators";
import {Vote} from "../model/vote";
import {Post} from "../model/post";

@Injectable()
export class VoteService {
  private apiUrl = 'http://localhost:3000/api'
  constructor(private http: HttpClient) {
  }

  getVotes(id: string,objectType: string): Observable<any> {
    console.log('get ${objectType} votes for id: ',id);
    const trueUrl = `${this.apiUrl}/${objectType}s/${id}/votes`;
    return this.http.get<Vote[]>(trueUrl).pipe(tap(r => console.log(r)));
  }
  addVote(newVote: Vote, id: string,objectType: string) {
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    const trueUrl = `${this.apiUrl}/${objectType}s/${id}/votes`;
    const auth = localStorage.getItem("accessKey");
    console.log(newVote);
    return this.http.post<Vote>(`${trueUrl}?access_token=${auth}`, newVote, {headers: header});
  }
  alterVoteCount(id: string,objectType: string){
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    let trueUrl = `${this.apiUrl}/${objectType}s/${id}`;
    const auth = localStorage.getItem("accessKey");
    let post:Post;
    this.http.get<Post>(`${trueUrl}`).subscribe(
      result => {post = result as Post},
      err => {
        console.log('cant get post');
        return false;
      });
    console.log(post);
    post.votesObtained += 1;
    console.log(post.votesObtained);
    return this.http.put<Post>(`${trueUrl}`,post);
  }
  destroyVote(id:string){
    const trueUrl = `${this.apiUrl}/votes/${id}`;
    return this.http.delete(trueUrl);
  }
}
