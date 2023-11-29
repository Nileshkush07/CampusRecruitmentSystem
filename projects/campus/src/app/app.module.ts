import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent as PublicHomeComponent } from './public/home/home.component';
import { PublicNavBarComponent } from './public/main-layouts/public-nav-bar/public-nav-bar.component';
import { HomeDashboardComponent } from './public/home-dashboard/home-dashboard.component';
import { PublicFooterComponent } from './public/main-layouts/public-footer/public-footer.component';
import { RegisterComponent } from './public/register/register.component';
import { SigninComponent } from './public/signin/signin.component';
import { AboutComponent } from './public/about/about.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AdminRegisterComponent } from './Admin/admin-register/admin-register.component';
import { AdminNavbarComponent } from './Admin/admin-layouts/admin-navbar/admin-navbar.component';
import { AdminFooterComponent } from './Admin/admin-layouts/admin-footer/admin-footer.component';
import { AdminSidebarComponent } from './Admin/admin-sidebar/admin-sidebar.component';
import { HomeComponent as AdminHomeComponent} from './Admin/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    PublicHomeComponent ,
       PublicNavBarComponent,
    HomeDashboardComponent,
    PublicFooterComponent,
    RegisterComponent,
    SigninComponent,
    AboutComponent,
    AdminDashboardComponent,
    AdminRegisterComponent,
    AdminNavbarComponent,
    AdminFooterComponent,
    AdminSidebarComponent,
    AdminHomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
