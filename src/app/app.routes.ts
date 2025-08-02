import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { Product } from './components/product/product';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
      path: 'admin',
      loadComponent: () =>
        import('./components/admin-dashboard-component/admin-dashboard-component').then(m => m.AdminDashboardComponent)
    },
    {
      path: 'profile',
      loadChildren: () =>
        import('./components/profile/profile.routes').then((m) => m.PROFILE_ROUTES)
    },

    {
      path: 'product/:id',
      component: Product,
    }

  ];
  