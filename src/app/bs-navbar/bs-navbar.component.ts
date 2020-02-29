import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  userFirebase: firebase.User;

  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(x => this.userFirebase = x);
   }

  logout() {
    this.afAuth.auth.signOut();
}

}
