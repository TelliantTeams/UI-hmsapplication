import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { DoctorViewAppointmentComponent } from './doctor-view-appointment/doctor-view-appointment.component';
import { DoctorViewDashboardComponent } from './doctor-view-dashboard/doctor-view-dashboard.component';
import { LoginComponent } from './login/login.component';
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
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
