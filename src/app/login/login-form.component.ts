import { Component } from '@angular/core';

import { AuthService, AuthState } from './authentication.service';

@Component({
  moduleId: module.id,
  selector: 'login-form',
  templateUrl: 'login-form.component.html' 
})

export class LoginFormComponent {
  model: any = {};
  loading = false;
  loggedIn: boolean;

  constructor(private authService_: AuthService) {
    authService_.authChange.subscribe(
      newAuthState =>
        this.loggedIn = (newAuthState === AuthState.LoggedIn));
  }

  login(username: string, password: string) { 
    this.authService_.login(username, password);
    console.log(username);
  }
}
