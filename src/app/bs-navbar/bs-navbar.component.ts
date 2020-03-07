import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  auth$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    // afAuth.authState.subscribe(authState => this.auth = authState);
    this.auth$ = afAuth.authState;
   }

  logout() {
    this.afAuth.auth.signOut();
}

}
