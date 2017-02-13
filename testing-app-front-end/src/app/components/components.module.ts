import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { PreloaderComponent } from './preloader/preloader.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    providers: [],
    declarations: [
        MainComponent,
        LoginComponent,
        ProfileComponent,
        PreloaderComponent
    ],
    exports: [
        MainComponent,
        LoginComponent,
        ProfileComponent,
        PreloaderComponent

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}