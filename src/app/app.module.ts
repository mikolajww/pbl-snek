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

const routes:Routes = [
  {path: '', component:ForumComponent},
  {path: 'about', component:AboutComponent}
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
    ForumComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
