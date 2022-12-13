import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-dasboard-stat',
  templateUrl: './admin-dasboard-stat.component.html',
  styleUrls: ['./admin-dasboard-stat.component.css']
})
export class AdminDasboardStatComponent implements OnInit{

  constructor(private apiservice:ApiService,private http:HttpClient){}

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



  
}
