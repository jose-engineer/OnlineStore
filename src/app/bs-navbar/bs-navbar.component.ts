import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  constructor(public auth: AuthService) {
    // afAuth.authState.subscribe(authState => this.auth = authState);
   }

   login() {
     this.auth.login();
   }

  logout() {
    this.auth.logout();
}

}
