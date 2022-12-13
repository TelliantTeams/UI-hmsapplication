import { Component } from '@angular/core';
import { DoctorViewAppointmentComponent } from '../doctor-view-appointment/doctor-view-appointment.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-doctor-view-dashboard',
  templateUrl: './doctor-view-dashboard.component.html',
  styleUrls: ['./doctor-view-dashboard.component.css']
})
export class DoctorViewDashboardComponent {

constructor(public dialog:MatDialog){}

    openDialog() {
      const dialogRef = this.dialog.open(DoctorViewAppointmentComponent);

  }


}
