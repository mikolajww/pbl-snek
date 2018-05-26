import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() onLogin:EventEmitter<boolean>;
  constructor(private userService:UserService) {
    this.onLogin = new EventEmitter<boolean>();
  }

  ngOnInit() {
  }

  login(email:HTMLInputElement, password:HTMLInputElement) {
      if(email != null && password != null) {
        this.userService.loginUser(email.value, password.value);
      }
  }

}
