import { Component, OnInit } from '@angular/core';
import {PostService} from '../../service/post.service';
import {Post} from '../../model/post';
import {PostHttpService} from '../../service/post-http-service.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postList:any[];
  constructor(private postService:PostHttpService) { }

  ngOnInit() {
    this.postService.getAllPosts().subscribe(r=> {
      this.postList = r;
      console.log(r);
      }
    );
    console.log(this.postList);
  }

}
