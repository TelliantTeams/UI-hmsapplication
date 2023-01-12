import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonToggleModule } 
    from "@angular/material/button-toggle";
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { ConfirmdialogComponent } from './confirmdialog/confirmdialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { ProfileComponent } from './profile/profile.component';
import { DoctorViewAppointmentComponent } from './doctor-view-appointment/doctor-view-appointment.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DoctorViewDashboardComponent } from './doctor-view-dashboard/doctor-view-dashboard.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';


import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { PatientViewDashboardComponent } from './patient-view-dashboard/patient-view-dashboard.component';
import { AdminViewDashboardComponent } from './admin-view-dashboard/admin-view-dashboard.component';
import { AdminViewAppointmentrequestsComponent } from './admin-view-appointmentrequests/admin-view-appointmentrequests.component';
import { AdminViewApprovedrequestsComponent } from './admin-view-approvedrequests/admin-view-approvedrequests.component';
import { AdminViewTodayappComponent } from './admin-view-todayapp/admin-view-todayapp.component';
import { AdminViewDoctorComponent } from './admin-view-doctor/admin-view-doctor.component';
import { AdminViewPatientComponent } from './admin-view-patient/admin-view-patient.component';
import { AdminViewBookingformComponent } from './admin-view-bookingform/admin-view-bookingform.component';
import { AdminViewCreatepatientComponent } from './admin-view-createpatient/admin-view-createpatient.component';
import { AdminViewCreatedoctorComponent } from './admin-view-createdoctor/admin-view-createdoctor.component';
import { AdminViewEditdoctorComponent } from './admin-view-editdoctor/admin-view-editdoctor.component';
import { AdminViewEditpatientComponent } from './admin-view-editpatient/admin-view-editpatient.component';
import { AdminViewRescheduleComponent } from './admin-view-reschedule/admin-view-reschedule.component';
import { FxdesignComponent } from './fxdesign/fxdesign.component';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { AdminViewNbookingformComponent } from './admin-view-nbookingform/admin-view-nbookingform.component';
import { AdminViewNslotshowComponent } from './admin-view-nslotshow/admin-view-nslotshow.component';
import { AdminViewNpaymentwindowComponent } from './admin-view-npaymentwindow/admin-view-npaymentwindow.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DoctorDashboardComponent,
    ConfirmdialogComponent,
    ProfileComponent,
    DoctorViewAppointmentComponent,
    DoctorViewDashboardComponent,
    AdminDashboardComponent,
    PatientDashboardComponent,
    PatientViewDashboardComponent,
    AdminViewDashboardComponent,
    AdminViewAppointmentrequestsComponent,
    AdminViewApprovedrequestsComponent,
    AdminViewTodayappComponent,
    AdminViewDoctorComponent,
    AdminViewPatientComponent,
    AdminViewBookingformComponent,
    AdminViewCreatepatientComponent,
    AdminViewCreatedoctorComponent,
    AdminViewEditdoctorComponent,
    AdminViewEditpatientComponent,
    AdminViewRescheduleComponent,
    FxdesignComponent,
    AdminViewNbookingformComponent,
    AdminViewNslotshowComponent,
    AdminViewNpaymentwindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatGridListModule,
    MatTooltipModule,
    MatSelectModule,
    MatMomentDateModule,
    MatButtonToggleModule

    
  ],
  providers: [ { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
