import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './home.component';
import { routing } from './routes';
import { TabsModule } from '../tabs/tabs.module';
import { ProfileComponent } from '../profile/profile.component';
import { NewsComponent } from '../news/news.component';
//import { TabsComponent } from '../tabs/tabs.component';

@NgModule({
    declarations: [
        HomeComponent,
        ProfileComponent,
        NewsComponent,
        // TabsComponent
    ],
    imports: [
        routing,
        TabsModule
    ]
})
export class HomeModule { }
