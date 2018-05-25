import {AfterContentChecked, AfterViewChecked, Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';

declare var jQuery:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewChecked{
  email:string;
  logged = false;
  private isChecked: boolean;
  constructor(private userService:UserService) { }

  ngOnInit() {

  }

  ngAfterViewChecked() {
    if(!this.isChecked) {
      this.isChecked = true;
      jQuery('.login.item')
        .popup({
          on:'manual',
          hoverable  : true,
          position   : 'bottom left',
          popup:'.ui.basic.popup',
          offset:-165,
          delay: {
            show: 300,
            hide: 200
          }
        });
    }
  }

  logout() {
    this.userService.logout();
    this.logged = false;
  }

  loggedIn($event){
    this.logged = <boolean><any>event;
  }

  showLogin() {
    if(!this.logged) {
      jQuery('.login.item').popup('show');
    }
    else this.logout();
  }
}
