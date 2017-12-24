import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any = {};
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.loginService.getLogin(this.user).subscribe((data) => {
        console.log(data);
        localStorage.setItem('token', 'login success');
    // tslint:disable-next-line:no-unused-expression
    }), errors => {
      console.log(errors);
    };
  }
}
