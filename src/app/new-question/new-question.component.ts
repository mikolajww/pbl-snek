import { Component, OnInit } from '@angular/core';
import {NewPost} from '../model/new-post';
import {PostService} from '../service/post.service';
import {PostHttpService} from '../service/post-http-service.service';
declare var jQuery:any;

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {
  newPost:NewPost;
  constructor(private postService:PostHttpService) {
    this.newPost = new NewPost();
  }

  ngOnInit() {
    jQuery('.ui.negative.message').hide();
    jQuery('.ui.negative.message.sametag').hide();
  }

  addTag(tag:any):boolean{
    let err = false;
    if(this.newPost.tags.length >= 5) {
      jQuery('.ui.negative.message.toomany').show().delay(3000).fadeOut();
      err = true;
    }
    if(this.newPost.tags.includes(tag.value)) {
      jQuery('.ui.negative.message.sametag').show().delay(3000).fadeOut();
      err = true;
    }
    if(err) return false;
    if(tag.value != "") {
      this.newPost.tags.push(tag.value);
    }
    tag.value = '';
    return false;
  }

  removeTag(t:string) {
    this.newPost.tags.splice(this.newPost.tags.indexOf(t),1);
  }

  addPost():boolean {
    let post = new NewPost();
    post.description = this.newPost.description;
    post.title = this.newPost.title;
    post.tags = this.newPost.tags;
    console.log(post);
    this.postService.addPost(this.newPost);
    return false;
  }


}
