import {Component, Input, OnInit} from '@angular/core';
import {Vote} from "../model/vote";
import {VoteService} from "../service/vote.service";
import {NewComment} from "../model/new-comment";

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  @Input() object: any;
  newVote: Vote;
  votesList: Vote[];
  constructor(private voteService:VoteService) {
    this.newVote = new Vote();
  }

  ngOnInit() {
    this.voteService.getVotes(this.object.id,"post").subscribe(r=> {
        this.votesList = r;
        console.log(r);
      }
    );
    console.log(this.votesList);
  }
  upvote(): boolean {
    this.newVote.ownerId = localStorage.getItem("userId");
    this.newVote.recipientId = this.object.userId;
    this.newVote.value = 1;
    this.voteService.addVote(this.newVote,this.object.id,"post").subscribe(
      r => console.log(r),
      err =>  console.log(err)
    );
    this.voteService.alterVoteCount(this.object.id,"post").subscribe();
    return false;
  }
  downvote(): boolean {
    return false;
  }
}
