import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


export const routing = RouterModule.forChild([
  // {
  //   path: '',
  //   component: HomeComponent,
  //   pathMatch: 'prefix' 
  //   loadChildren: './components/tabs/tabs.module#TabsModule'
  // }
   {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    }
]);