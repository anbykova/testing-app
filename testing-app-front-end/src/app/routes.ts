import {RouterModule, } from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {LoginComponent} from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';
import {HomeComponent} from './components/home/home.component';
import {AuthGuardService} from './services/auth-guard.service';
import {LoginGuardService} from './services/login-guard.service';

export const CLIENT_ROUTER_PROVIDERS = [
  AuthGuardService,
  LoginGuardService
];

export const routing = RouterModule.forRoot([
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
    canActivate: [ LoginGuardService ]
  },
  {
    path: '',
    canActivate: [ AuthGuardService ],
    loadChildren: './components/main/main.module#MainModule'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]);