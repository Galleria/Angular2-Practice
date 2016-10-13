import{Component,ViewEncapsulation,ChangeDetectionStrategy } from '@angular/core';

import { tokenNotExpired } from 'angular2-jwt';
//import Auth0Lock from 'auth0-lock';

import {
  LoadingService,
  NotifyService
} from '../../services';

declare var Auth0Lock:any;

@Component({
  selector: 'login-component',
  template: `
    <h1>Welcome to Angular2 with Auth0</h1>
    <button *ngIf="!loggedIn()" (click)="login()">Login</button>
    <button *ngIf="loggedIn()" (click)="logout()">Logout</button>
  `
})

export class LoginComponent {

    private lock:any; //= new Auth0Lock('YOUR_CLIENT_ID', 'YOUR_NAMESPACE');

    constructor() {}

    login(){
      console.log( Auth0Lock );
      /*
      var hash = this.lock.parseHash();
      if (hash) {
        if (hash.error)
          console.log('There was an error logging in', hash.error);
        else
          this.lock.getProfile(hash.id_token, function(err, profile) {
            if (err) {
              console.log(err);
              return;
            }
            localStorage.setItem('profile', JSON.stringify(profile));
            localStorage.setItem('id_token', hash.id_token);
          });
      }
      */
    }

    logout() {
      localStorage.removeItem('profile');
      localStorage.removeItem('id_token');
    }

    loggedIn() {
      return tokenNotExpired();
    }
}
