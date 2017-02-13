import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

export const routing = RouterModule.forChild([
  {
    path: '',
    component: MainComponent,
    children:[
      {
        pathMatch: 'full',
        path: '',
        redirectTo: 'home'      
      },
      {
        path: 'home',
        loadChildren: '../home/home.module#HomeModule'
      }
    ]
  }
]);
