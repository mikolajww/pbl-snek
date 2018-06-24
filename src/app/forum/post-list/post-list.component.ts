import { Component, OnInit } from '@angular/core';
import {PostService} from '../../service/post.service';
import {Post} from '../../model/post';
import {PostHttpService} from '../../service/post-http-service.service';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postList:Post[];
  constructor(private postService:PostHttpService) { }

  ngOnInit() {
    this.postService.getAllPosts().subscribe(r=> {
      this.postList = r;
      console.log(r);
      this.postList[0].solved = true;
      }
    );
    console.log(this.postList);

  }

  search($event:string) {
      this.postService.getFilteredPosts($event).subscribe(
        res => this.postList = res
      )
  }
}
