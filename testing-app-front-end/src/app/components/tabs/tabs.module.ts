import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { TabsComponent } from './tabs.component';
import { TestsComponent } from './components/tests/tests.component';
import { TestsService } from './components/tests/tests.service'


@NgModule({
    declarations: [
        TabsComponent,
        TestsComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        TestsService
    ],
    exports: [
        TabsComponent
    ]
})
export class TabsModule { }
