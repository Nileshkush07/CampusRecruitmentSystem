import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
import { ApplyjobComponent } from './public/applyjob/applyjob.component';
import { JobpostComponent } from './company/jobpost/jobpost.component';
import { CompanyDashboardComponent } from './company/company-dashboard/company-dashboard.component';
import { CompanyHomeComponent } from './company/company-home/company-home.component';
import { CompFooterComponent } from './company/comp-layouts/comp-footer/comp-footer.component';
import { CompNavbarComponent } from './company/comp-layouts/comp-navbar/comp-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CompSidebarComponent } from './company/comp-layouts/comp-sidebar/comp-sidebar.component';
import { StudentListComponent } from './company/student-list/student-list.component';
import { CollegeProfileComponent } from './company/college-profile/college-profile.component';
import { CVComponent } from './company/cv/cv.component';
import { MyProfileComponent } from './company/my-profile/my-profile.component';
import { CandidatesComponent } from './company/candidates/candidates.component';
import { MyJobComponent } from './company/my-job/my-job.component';
import { UpdateAdminProfileComponent } from './Admin/update-admin-profile/update-admin-profile.component';
import { UpdateCompProfileComponent } from './company/update-comp-profile/update-comp-profile.component';
import { StudentDashboardComponent } from './Student/student-dashboard/student-dashboard.component';
import { StudentHomeComponent } from './Student/student-home/student-home.component';
import { ViewjobComponent } from './Student/viewjob/viewjob.component';
import { StudentUpdateprofileComponent } from './Student/student-updateprofile/student-updateprofile.component';
import { StudentProfileComponent } from './Student/student-profile/student-profile.component';
import { StudentFooterComponent } from './Student/student-layouts/student-footer/student-footer.component';
import { StudentNavbarComponent } from './Student/student-layouts/student-navbar/student-navbar.component';
import { StudentSidebarComponent } from './Student/student-layouts/student-sidebar/student-sidebar.component';
import { CompanyListComponent } from './Student/company-list/company-list.component';
import { ApplicationStatusComponent } from './Student/application-status/application-status.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { PublicHomeComponent } from './public/public-home/public-home.component';
import { AdminStudentComponent } from './Admin/admin-student/admin-student.component';
import { AdminUpdateStudentComponent } from './Admin/admin-update-student/admin-update-student.component';
import { AdminCompanyComponent } from './Admin/admin-company/admin-company.component';
import { AdminJobsComponent } from './Admin/admin-jobs/admin-jobs.component';
import { AdminProfileComponent } from './Admin/admin-profile/admin-profile.component';
import { AdminCVmanageComponent } from './Admin/admin-cvmanage/admin-cvmanage.component';










@NgModule({
  declarations: [
    AppComponent,
 
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
   
    ApplyjobComponent,
    JobpostComponent,
    CompanyDashboardComponent,
    CompanyHomeComponent,
    CompFooterComponent,
    CompNavbarComponent,
    CompSidebarComponent,
    StudentListComponent,
    CollegeProfileComponent,
    CVComponent,
    MyProfileComponent,
    CandidatesComponent,
    MyJobComponent,
    UpdateAdminProfileComponent,
    UpdateCompProfileComponent,
    StudentDashboardComponent,
    StudentHomeComponent,
    ViewjobComponent,
    StudentUpdateprofileComponent,
    StudentProfileComponent,
    StudentFooterComponent,
    StudentNavbarComponent,
    StudentSidebarComponent,
    CompanyListComponent,
    ApplicationStatusComponent,
    AdminHomeComponent,
    PublicHomeComponent,
    AdminStudentComponent,
    AdminUpdateStudentComponent,
    AdminCompanyComponent,
    AdminJobsComponent,
    AdminProfileComponent,
    AdminCVmanageComponent
  




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
