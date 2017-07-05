import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';

const appRoutes : Routes = [
  {
    path: 'page-two',
    component: PageTwoComponent
  },
  {
    path: 'page-three',
    component: PageThreeComponent
  },
  {
    path: '',
    component: PageOneComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
