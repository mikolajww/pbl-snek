import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../../../model/comment";
import {User} from "../../../../model/user";
import {CommentService} from "../../../../service/comment.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment:Comment;
  author:User;


  constructor(private commentService : CommentService) { }
  ngOnInit() {
  }

  upvote() {
    //this.comment.votes +=1;
  }
  downvote() {
    //this.comment.votes-=1;
  }

}
