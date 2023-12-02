import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashboardComponent } from './public/home-dashboard/home-dashboard.component';
import { RegisterComponent } from './public/register/register.component';
import { SigninComponent } from './public/signin/signin.component';
import { AboutComponent } from './public/about/about.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { adminGuardGuard } from './service/admin-guard.guard';
import { AdminRegisterComponent } from './Admin/admin-register/admin-register.component';
import { ApplyjobComponent } from './public/applyjob/applyjob.component';
import { JobpostComponent } from './company/jobpost/jobpost.component';
import { CompanyHomeComponent } from './company/company-home/company-home.component';
import { CompanyDashboardComponent } from './company/company-dashboard/company-dashboard.component';
import { CandidatesComponent } from './company/candidates/candidates.component';
import { companyGuard } from './service/company.guard';
import { MyJobComponent } from './company/my-job/my-job.component';
import { MyProfileComponent } from './company/my-profile/my-profile.component';
import { CVComponent } from './company/cv/cv.component';
import { CollegeProfileComponent } from './company/college-profile/college-profile.component';
import { studentGuard } from './service/student.guard';
import { StudentHomeComponent } from './Student/student-home/student-home.component';
import { StudentDashboardComponent } from './Student/student-dashboard/student-dashboard.component';
import { ViewjobComponent } from './Student/viewjob/viewjob.component';
import { StudentProfileComponent } from './Student/student-profile/student-profile.component';
import { StudentListComponent } from './company/student-list/student-list.component';
import { CompanyListComponent } from './Student/company-list/company-list.component';
import { ApplicationStatusComponent } from './Student/application-status/application-status.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { PublicHomeComponent } from './public/public-home/public-home.component';
import { AdminStudentComponent } from './Admin/admin-student/admin-student.component';
import { AdminCompanyComponent } from './Admin/admin-company/admin-company.component';
import { AdminJobsComponent } from './Admin/admin-jobs/admin-jobs.component';
import { AdminProfileComponent } from './Admin/admin-profile/admin-profile.component';
import { AdminCVmanageComponent } from './Admin/admin-cvmanage/admin-cvmanage.component';

const routes: Routes = [

  {
    path: 'public',
    component: PublicHomeComponent,
    children: [
      { path: '', component: HomeDashboardComponent }
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
    path: 'applyjob',
    component: ApplyjobComponent
  },
  {
    path:'jobpost',
    component:JobpostComponent
  },
  {
    path: 'admin',
    component: AdminHomeComponent,
    canActivate: [adminGuardGuard],
    children: [
      {
        path: '',
        component: AdminDashboardComponent
      },
      {
         path:'jobpost',
         component:JobpostComponent
      },
      {
        path:'register',
        component:AdminRegisterComponent
      },
      {
        path:'studentlist',
        component:AdminStudentComponent
      },
      {
        path:'allcompany',
        component:AdminCompanyComponent
      },
      {
        path:'jobs',
        component:AdminJobsComponent
      },
      {
        path:'profile',
        component:AdminProfileComponent
      },
      {
        path:'cvmanage',
        component:AdminCVmanageComponent
      }
    ]
  },
  {
    path:'company',
    component:CompanyHomeComponent,
    canActivate: [companyGuard],
    children: [
      {
        path: '',
        component: CompanyDashboardComponent
      },
      {
        path:'jobpost',
        component:JobpostComponent
     },
     {
      path:'candidates',
      component:CandidatesComponent
     },
     {
      path:'myjob',
      component:MyJobComponent
     },
     {
      path:'myprofile',
      component:MyProfileComponent
     },
     {
      path:'cv',
      component:CVComponent
     },
     {
      path:'college-profile',
      component:CollegeProfileComponent
     },
     {
      path:'studentlist',
      component:StudentListComponent
     }
    ]
  },
  {
    path:'student',
    component:StudentHomeComponent,
    canActivate: [studentGuard],
    children: [
      {
        path: '',
        component:StudentDashboardComponent
       
      },
      {
        path:'viewjob',
        component:ViewjobComponent
       },
       {
        path:'myprofile',
        component:StudentProfileComponent
       },
       {
        path:'collegeprofile',
        component:AboutComponent
       },
       {
        path:'companylist',
        component:CompanyListComponent
       },
       {
        path:'applicationstatus',
        component:ApplicationStatusComponent
       }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
