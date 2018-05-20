import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchboxComponent } from './forum/searchbox/searchbox.component';
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
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

const routes:Routes = [
  {path: '', component:ForumComponent},
  {path: 'about', component:AboutComponent},
  {path: 'ask', component:NewQuestionComponent},
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
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PostService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
