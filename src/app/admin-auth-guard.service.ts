import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate() {
    return this.auth.auth$
    .pipe(switchMap(user => this.userService.get(user.uid).valueChanges()))
    .pipe(map(appUser => appUser.isAdmin));
  }
}
