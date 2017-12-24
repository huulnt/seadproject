import { Component, OnInit } from '@angular/core';
import { smoothlyMenu } from '../../app.helpers';
import { LoginService } from '../../login/login.service';
declare var jQuery: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(public loginService: LoginService) { }
  toggleNavigation(): void {
    jQuery('body').toggleClass('mini-navbar');
    smoothlyMenu();
  }
  logOut() {
    this.loginService.logOut().subscribe((data) => {
      console.log('Logout sucess');
    });
  }
}
