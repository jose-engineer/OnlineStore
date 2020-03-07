import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth$: Observable<firebase.User>;
  userFirebase: firebase.User;

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute) {
    afAuth.authState.subscribe(authState => this.userFirebase = authState);
    this.auth$ = afAuth.authState;
  }

  login() {
    const returnUrl = this.route.snapshot.queryParamMap.get('retornoUrl') || '/';
    localStorage.setItem('returnUrlValue', returnUrl);

    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
