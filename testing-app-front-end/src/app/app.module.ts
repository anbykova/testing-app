import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Ng2UiAuthModule, CustomConfig } from 'ng2-ui-auth';

import { RouterModule, Routes } from '@angular/router';
import { routing, CLIENT_ROUTER_PROVIDERS } from './routes';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreWrappersModule } from './store-wrappers/store-wrappers.module';
import { StatesModule } from './states/states.module';
import { ActionsModule } from './actions/actions.module';

import { LoginComponent } from './components/login/login.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { AppComponent } from './app.component';

import { TransportService } from './services/transport.service';
import { StorageService } from './services/store.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginGuardService } from './services/login-guard.service';

import { reducer } from './reducers';

export const GOOGLE_CLIENT_ID = '745700322162-gep44qpible2dkai7ntpe13nesd0hfa0.apps.googleusercontent.com';
export class MyAuthConfig extends CustomConfig {
    defaultHeaders = {'Content-Type': 'application/json'};
    providers = {google: {
      clientId: GOOGLE_CLIENT_ID,
      redirectUri:`http://localhost:8081`,
      optionalUrlParams: ['display', 'state', 'hd','redirectUri']
    }};
    baseUrl = `http://localhost:8090`;    
}

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        PreloaderComponent
    ],
    imports: [
        routing,
        Ng2UiAuthModule.forRoot(MyAuthConfig),
        StoreWrappersModule,
        StatesModule,
        ActionsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        StoreModule.provideStore(reducer)
    ],
    providers: [
        UserService,
        TransportService,
        StorageService,
        AuthService,
        AuthGuardService,
        LoginGuardService,
        CLIENT_ROUTER_PROVIDERS
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
