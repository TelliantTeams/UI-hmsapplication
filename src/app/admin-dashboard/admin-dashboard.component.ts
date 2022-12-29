import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { AdminViewBookingformComponent } from '../admin-view-bookingform/admin-view-bookingform.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
 

  constructor(private route:Router,public dialog:MatDialog){}

  openForm(){
    this.dialog.open(AdminViewBookingformComponent,{width:'100%'});

  }

  selectedItem = '';
  

  listItems = [
    { linkTitle: 'Dashboard', link: 'dashboard'},
    { linkTitle: 'Today Appointments', link: 'Today-Appointment' },
    { linkTitle: 'Appointment-Requests', link: 'Req-Appointment' },
    { linkTitle: 'Appointment-Approved', link: 'App-Appointment' },
    { linkTitle: 'Doctors', link: 'Doctors' },
    { linkTitle: 'Patients', link: 'Patients' }
  ];

  handleClick(selectedItem: { linkTitle: any; }) {
    this.selectedItem = selectedItem.linkTitle;
  }

}
