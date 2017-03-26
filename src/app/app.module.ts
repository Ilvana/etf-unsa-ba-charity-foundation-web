import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AboutModule} from "./about/about.module";
import {RouterModule, Routes} from "@angular/router";
import {ContactModule} from "./contact/contact.module";
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";
import {GalleryModule} from "./gallery/gallery.module";
import {GalleryComponent} from "./gallery/gallery.component";
import {DonationComponent} from "./donation/donation.component";
import {DonationModule} from "./donation/donation.module";
import {HomeModule} from "./home/home.module";
import {HomeComponent} from "./home/home.component";
import {SinglePageModule} from "./singlePage/singlePage.module";
import {SinglePageComponent} from "./singlePage/singlePage.component";
import {AllPagesComponent} from "./allPages/allPages.component";
import {AllPagesModule} from "./allPages/allPages.module";
import {RegistrationComponent} from "./registration/registration.component";
import {RegistrationModule} from "./registration/registration.module";
import {AdminModule} from "./admin/admin.module";
import {AdminComponent} from "./admin/admin.component";
import {LoginComponent} from "./login/login.component";

const appRoutes: Routes = [
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'donation',
    component: DonationComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'singlePage',
    component: SinglePageComponent
  },
  {
    path: 'allPages',
    component: AllPagesComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AboutModule,
    ContactModule,
    GalleryModule,
    DonationModule,
    HomeModule,
    SinglePageModule,
    AllPagesModule,
    RegistrationModule,
    AdminModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
