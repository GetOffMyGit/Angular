import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { AboutComponent } from './about/about.component';

import { WindowReferenceService } from './global-object.services/window-reference.service';
import { IntroAnimationService } from './animations/intro-animation.service';
import { ScrollAnimationsService } from './animations/scroll-animation.service';
import { TransitionAnimationService } from './animations/transition-animation.service';
import { RotationAnimationService } from './animations/rotation-animation.service';

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
  }
]

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    HomeComponent,
    PostsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [
    WindowReferenceService,
    IntroAnimationService,
    ScrollAnimationsService,
    TransitionAnimationService,
    RotationAnimationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
