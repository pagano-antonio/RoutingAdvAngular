import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { Product } from './components/product/product';
import { AdminDashboardComponent } from './components/admin-dashboard-component/admin-dashboard-component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminDashboardComponent },
  /*
  {
    path: 'admin',
    loadComponent: () =>
      import('./components/admin-dashboard-component/admin-dashboard-component').then(m => m.AdminDashboardComponent)
  }
    
  ,
*/
  {
    path: 'profile',
    loadChildren: () =>
      import('./components/profile/profile.routes').then((m) => m.PROFILE_ROUTES)
  },
  // Wildcard route
  // { path: '**', component: PageNotFoundComponent } 

  //Variante con redirect:
  // { path: 'home', component: HomeComponent },
  // { path: '**', redirectTo: 'home' } 



  {
    path: 'product/:id',
    component: Product,
  }

];
