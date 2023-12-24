import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { YesPageComponent } from './yes-page/yes-page.component';
import { NoPageComponent } from './no-page/no-page.component';

export const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'yes', component: YesPageComponent },
  { path: 'no', component: NoPageComponent },
];
