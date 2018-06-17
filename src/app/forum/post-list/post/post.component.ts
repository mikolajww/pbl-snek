import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../model/post';
import {User} from '../../../model/user';
import {UserService} from '../../../service/user.service';
import {NewPost} from "../../../model/new-post";
import {Vote} from "../../../model/vote";
declare var jQuery:any;
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post:Post;
  author:User;
  constructor(private userService:UserService) { }

  ngOnInit() {

    //this.author = this.userService.getUser(this.post.userId || 0);
  }

  showModal() {
    jQuery(`.ui.modal.${this.post.id}`).modal('show');
  }

  upvote(): boolean {
    let vote = new Vote();
    vote.ownerId = localStorage.getItem("userId");
    vote.recipientId = this.post.userId;
    vote.value = 1;
    this.userService.vote(vote,this.post.id).subscribe(
      r => console.log(r),
      err =>  console.log(err)
    );
    this.userService.updateVoteCount(this.post.id).subscribe(
      r => console.log(r),
      err =>  console.log(err)
    );
    return false;
  }
  downvote(): boolean {
    let vote = new Vote();
    vote.ownerId = localStorage.getItem("userId");
    vote.recipientId = this.post.userId;
    vote.value = -1;
    this.userService.vote(vote,this.post.id).subscribe(
      r => console.log(r),
      err =>  console.log(err)
    );
    this.userService.updateVoteCount(this.post.id).subscribe(
      r => console.log(r),
      err =>  console.log(err)
    );
    return false;
  }

}
