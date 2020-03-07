import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route, state: RouterStateSnapshot) {
    if (this.auth.userFirebase) {
      return true;
    }
    this.router.navigate(['/login'], {queryParams: { retornoUrl: state.url }});
    return false;

    // return this.auth.auth$.map(user => {
    //   if (user) {
    //   return true;
    //   }

    //   this.router.navigate(['/login']);
    //   return false;
    // });
  }

}
