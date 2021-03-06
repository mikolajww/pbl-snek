import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../model/post';
import {User} from '../../../model/user';
import {UserService} from '../../../service/user.service';
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

  upvote() {
    this.post.votes +=1;
  }
  downvote() {
    this.post.votes-=1;
  }

}
