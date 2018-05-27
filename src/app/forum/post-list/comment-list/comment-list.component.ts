import {Component, Input, OnInit} from '@angular/core';
import {CommentService} from '../../../service/comment.service';
import {Post} from "../../../model/post";
import {Comment} from "../../../model/comment";
import {NewPost} from "../../../model/new-post";
import {NewComment} from "../../../model/new-comment";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  @Input() post:Post;
  commentList:any[];
  newComment: NewComment;

  constructor(private commentService: CommentService) {
    this.newComment = new NewComment();
  }


  ngOnInit() {
    this.commentService.getComments(this.post.id).subscribe(r=> {
        this.commentList = r;
        console.log(r);
      }
    );
    console.log(this.commentList);
  }
  addComment():boolean{
    let comment = new NewComment();
    comment.body = this.newComment.body;
    comment.userId = localStorage.getItem("userId");
    this.commentService.addComment(comment,this.post.id);
    return false;
  }
}
