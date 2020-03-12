import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  appUser: AppUser;

  constructor(private auth: AuthService) {

    auth.appUser$.subscribe(userDB => this.appUser = userDB);

   }

   login() {
     this.auth.login();
   }

  logout() {
    this.auth.logout();
   }

}
