import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
import { map, switchMap } from 'rxjs/operators';
import { AppUser } from './models/app-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth$: Observable<firebase.User>;
  userFirebase: firebase.User;

  constructor(private userService: UserService, private afAuth: AngularFireAuth, private route: ActivatedRoute) {
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

  get appUser$(): Observable<AppUser> {
    return this.auth$
    .pipe(switchMap(user => {
      if (user) {
        return this.userService.get(user.uid).valueChanges();
      }
      return of(null);
    }
    ));
  }

}
