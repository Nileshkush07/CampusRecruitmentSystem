import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent as PublicHomeComponent } from './public/home/home.component';
import { HomeDashboardComponent } from './public/home-dashboard/home-dashboard.component';
import { RegisterComponent } from './public/register/register.component';
import { SigninComponent } from './public/signin/signin.component';
import { AboutComponent } from './public/about/about.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { adminGuardGuard } from './service/admin-guard.guard';
import { AdminRegisterComponent } from './Admin/admin-register/admin-register.component';
import { HomeComponent as AdminHomeComponent } from './Admin/home/home.component';

const routes: Routes = [

  {
    path: '',
    component: PublicHomeComponent,
    children: [
      { path: "", component: HomeDashboardComponent }
    ]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'admin',
    component: AdminHomeComponent,
    canActivate: [adminGuardGuard],
    children: [
      {
        path: '',
        component: AdminDashboardComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
