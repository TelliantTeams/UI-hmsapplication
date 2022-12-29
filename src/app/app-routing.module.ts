import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminViewAppointmentrequestsComponent } from './admin-view-appointmentrequests/admin-view-appointmentrequests.component';
import { AdminViewApprovedrequestsComponent } from './admin-view-approvedrequests/admin-view-approvedrequests.component';
import { AdminViewBookingformComponent } from './admin-view-bookingform/admin-view-bookingform.component';
import { AdminViewCreatedoctorComponent } from './admin-view-createdoctor/admin-view-createdoctor.component';
import { AdminViewCreatepatientComponent } from './admin-view-createpatient/admin-view-createpatient.component';
import { AdminViewDashboardComponent } from './admin-view-dashboard/admin-view-dashboard.component';
import { AdminViewDoctorComponent } from './admin-view-doctor/admin-view-doctor.component';
import { AdminViewEditdoctorComponent } from './admin-view-editdoctor/admin-view-editdoctor.component';
import { AdminViewEditpatientComponent } from './admin-view-editpatient/admin-view-editpatient.component';
import { AdminViewPatientComponent } from './admin-view-patient/admin-view-patient.component';
import { AdminViewRescheduleComponent } from './admin-view-reschedule/admin-view-reschedule.component';
import { AdminViewTodayappComponent } from './admin-view-todayapp/admin-view-todayapp.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { DoctorViewAppointmentComponent } from './doctor-view-appointment/doctor-view-appointment.component';
import { DoctorViewDashboardComponent } from './doctor-view-dashboard/doctor-view-dashboard.component';
import { LoginComponent } from './login/login.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {path :'',component:LoginComponent},
  {path :'register',component :RegisterComponent},
  {path :'doctor-dashboard',component :DoctorDashboardComponent,
  children: [
    {path :'profile',component :ProfileComponent},
    {path :'appointment',component :DoctorViewAppointmentComponent},
    {path :'dashboard',component :DoctorViewDashboardComponent}
  ]
},
  {path :'admin-dashboard',component :AdminDashboardComponent,
  children: [
    {path : 'dashboard',component :AdminViewDashboardComponent},
    {path : 'Req-Appointment',component :AdminViewAppointmentrequestsComponent},
    {path : 'App-Appointment',component :AdminViewApprovedrequestsComponent},
    {path : 'Today-Appointment',component :AdminViewTodayappComponent},
    {path : 'Doctors',component : AdminViewDoctorComponent},
    {path : 'Patients',component : AdminViewPatientComponent},
    {path : 'Bookingform',component :AdminViewBookingformComponent}
  ]
}, 
  {path :'patient-dashboard',component :PatientDashboardComponent,
  children: [
 
  ]
},
  {path : 'editdocform/:id', component: AdminViewEditdoctorComponent},
  {path: 'createpatient',component :AdminViewCreatepatientComponent},
  {path: 'createdoctor',component :AdminViewCreatedoctorComponent},
  {path : 'Bookingform',component :AdminViewBookingformComponent},
  {path :'doctor-dashboard',component :DoctorDashboardComponent},
  {path :'admin-dashboard',component:AdminDashboardComponent},
  {path : 'editpatform/:id', component: AdminViewEditpatientComponent},
  {path : 'reschedule/:id', component: AdminViewRescheduleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
