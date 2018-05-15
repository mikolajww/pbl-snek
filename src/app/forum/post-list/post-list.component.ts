import { Component, OnInit } from '@angular/core';
import {PostService} from '../../service/post.service';
import {Post} from '../../model/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postList:Post[];
  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postList = this.postService.getAllPosts();
  }

}
