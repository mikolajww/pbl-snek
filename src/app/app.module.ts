import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchboxComponent } from './forum/post-list/searchbox/searchbox.component';
import { PostListComponent } from './forum/post-list/post-list.component';
import { PostComponent } from './forum/post-list/post/post.component';
import { TagSearchComponent } from './forum/tag-search/tag-search.component';
import { AboutComponent } from './about/about.component';
import {RouterModule, Routes} from '@angular/router';
import { ForumComponent } from './forum/forum.component';
import {PostService} from './service/post.service';
import {UserService} from './service/user.service';
import { NewQuestionComponent } from './new-question/new-question.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './navbar/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {PostHttpService} from './service/post-http-service.service';
import { CommentListComponent } from './forum/post-list/comment-list/comment-list.component';
import {CommentService} from "./service/comment.service";
import { CommentComponent } from './forum/post-list/comment-list/comment/comment.component';
import {LoggedInGuard} from './service/logged-in.guard';
import { TagListComponent } from './forum/tag-search/tag-list/tag-list.component';
import { TagComponent } from './forum/tag-search/tag-list/tag/tag.component';
import { VoteComponent } from './vote/vote.component';
import {VoteService} from "./service/vote.service";

const routes:Routes = [
  {path: '', component:ForumComponent},
  {path: 'about', component:AboutComponent},
  {
    path: 'ask',
    component:NewQuestionComponent,
    canActivate:[LoggedInGuard]
  },
  {path: 'contact', component:ContactComponent},
  {path: 'login', component:LoginComponent},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchboxComponent,
    PostListComponent,
    PostComponent,
    TagSearchComponent,
    AboutComponent,
    ForumComponent,
    NewQuestionComponent,
    ContactComponent,
    LoginComponent,
    PageNotFoundComponent,
    CommentListComponent,
    CommentComponent,
    TagListComponent,
    TagComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PostHttpService, UserService, CommentService,VoteService, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
