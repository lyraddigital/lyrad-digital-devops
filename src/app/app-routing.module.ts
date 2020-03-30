import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      pageTitle: environment.homePageName,
      iconUrl: '/assets/images/icons/home.svg',
      courses: [
        {
          title: 'Flexbox in Depth',
          description: `
            In this course you will go deep into understanding how
            Flexbox can help you design website layouts.
            We cover what Flexbox is and why we use it.
          `,
          thumbnailUrl: '/assets/images/courses/flexbox.jpg',
          thumbnailAlt: 'Flexbox in Depth',
          pageUrl: 'https://www.udemy.com/flexbox-in-depth'
        },
        {
          title: 'Mastering CSS Grid',
          description: `
            In this course you will not only learn CSS Grid from the basics
            to advanced concepts, but you will also learn how it can be applied
            to layout problems in the real world, and how it can be used in 3
            real life applications.
          `,
          thumbnailUrl: '/assets/images/courses/css-grid.png',
          thumbnailAlt: 'Mastering CSS Grid',
          pageUrl: 'https://www.udemy.com/mastering-css-grid'
        }
      ]
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      pageTitle: environment.aboutPageName,
      iconUrl: '/assets/images/icons/about.svg'
    }
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: {
      pageTitle: 'Not Found',
      iconUrl: '/assets/images/icons/not-found.svg'
    }
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
