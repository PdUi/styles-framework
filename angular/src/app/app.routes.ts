import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DialogComponent } from './dialog.component';
import { TabsComponent } from './tabs.component';

export const routes: Routes = [
  {
    path: 'dialog',
    component: DialogComponent,
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: TabsComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/tabs',
    pathMatch: 'full'
  }
];
