import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AuthService, router: Router) {
    auth.auth$.subscribe(user => {
      if (user) {
        const returnUrl = localStorage.getItem('returnUrlValue');
        router.navigateByUrl(returnUrl);
      }
    });

}


}
