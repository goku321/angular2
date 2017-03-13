import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AuthService } from './login/authentication.service';

import { AppComponent }  from './app.component';
import { LoginFormComponent } from './login/login-form.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent
  }
];

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    LoginFormComponent
  ],
  providers: [
    AuthService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
