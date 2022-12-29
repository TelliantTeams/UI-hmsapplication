import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { AdminViewBookingformComponent } from '../admin-view-bookingform/admin-view-bookingform.component';

@Component({
  selector: 'app-admin-view-dashboard',
  templateUrl: './admin-view-dashboard.component.html',
  styleUrls: ['./admin-view-dashboard.component.css']
})
export class AdminViewDashboardComponent implements OnInit{
  router: any;

  constructor(private apiservice:ApiService,private http:HttpClient,public dialog:MatDialog){}

  dcount: any;
  pcount:any;
  apps:any;
  papps:any;
  length: number;
  
  ngOnInit(){
    this.getdcount();
    this.getpcount();
    this.getapps();
    this.getpapps();
   
  }

  getdcount(){
    this.apiservice.getDoctorCount().subscribe({
      next:(res)=>{
        this.dcount=res;
     
      }
    })
  }

  getpcount(){
    this.apiservice.getPatientCount().subscribe({
      next:(res)=>{
        this.pcount=res;
      }
    })
  }

  getapps(){
    this.apiservice.getTodayAppointment().subscribe(response =>{
      this.apps = response;
    });
  }

  getpapps(){
    this.apiservice.getPendingAppointment().subscribe(response =>{
      this.papps = response;
    });
  }

  openForm(){
    this.dialog.open(AdminViewBookingformComponent,{width:'100%'});

  }


}
