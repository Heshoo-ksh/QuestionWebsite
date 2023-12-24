import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoPageComponent } from './no-page/no-page.component';
import { YesPageComponent } from './yes-page/yes-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    MainPageComponent,
    YesPageComponent,
    NoPageComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,

  ],
})
export class AppModule {}
