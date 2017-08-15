import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { WindowReferenceService } from './services/global-object.services/window-reference.service';
// import { IntroAnimationService } from './animations/intro-animation.service';
//import { ScrollAnimationsService } from './animations/scroll-animation.service';
//import { TransitionAnimationService } from './animations/transition-animation.service';
// import { RotationAnimationService } from './animations/rotation-animation.service';

import {  IntroAnimationService,
          TransitionAnimationService,
          ScrollAnimationsService,
          RotationAnimationService } from './services/animations/animation.service';

const appRoutes : Routes = [
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    HomeComponent,
    PostsComponent,
    AboutComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [
    Title,
    WindowReferenceService,
    IntroAnimationService,
    ScrollAnimationsService,
    TransitionAnimationService,
    RotationAnimationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
