import {Component, Input, OnInit} from '@angular/core';
import {CommentService} from '../../../service/comment.service';
import {Post} from "../../../model/post";
import {Comment} from "../../../model/comment";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  @Input() post:Post;
  commentList:any[];
  constructor(private commentService: CommentService) { }


ngOnInit() {
  this.commentService.getComments(this.post.id).subscribe(r=> {
      this.commentList = r;
      console.log(r);
    }
  );
  console.log(this.commentList);
  }

}
