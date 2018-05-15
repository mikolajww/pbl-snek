import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../model/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post:Post;
  constructor() { }

  ngOnInit() {
  }

  upvote() {
    this.post.votes +=1;
  }
  downvote() {
    this.post.votes-=1;
  }

}
