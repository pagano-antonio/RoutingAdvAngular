import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile';
import { SettingsComponent } from './settings/settings';
import { ActivityComponent } from './activity/activity';

export const PROFILE_ROUTES: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      { path: 'settings', component: SettingsComponent },
      { path: 'activity', component: ActivityComponent }
    ]
  }
];
