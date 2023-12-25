import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoPageComponent } from './no-page/no-page.component';
import { YesPageComponent } from './yes-page/yes-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoginComponent,
    MainPageComponent,
    YesPageComponent,
    NoPageComponent,
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,

  ],
})
export class AppModule {}
