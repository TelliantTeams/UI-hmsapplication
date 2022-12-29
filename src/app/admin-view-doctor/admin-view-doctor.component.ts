import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminViewCreatedoctorComponent } from '../admin-view-createdoctor/admin-view-createdoctor.component';
import { ApiService } from '../api.service';
import { newdoctor } from '../models/newdoctor';

@Component({
  selector: 'app-admin-view-doctor',
  templateUrl: './admin-view-doctor.component.html',
  styleUrls: ['./admin-view-doctor.component.css']
})
export class AdminViewDoctorComponent {
  doctors: any;
  myDate = new Date(); 
  
  displayedColumns: string[] = ['S.No','id', 'dname', 'contact', 'mail','qualification','actions'];
 // dataSource: MatTableDataSource<Response>;
 public dataSource: MatTableDataSource<newdoctor>;


  constructor(private apiservice:ApiService,private http:HttpClient,public dialog:MatDialog){}

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  ngOnInit(){
     this.getdoctors();
     const dataSource = new MatTableDataSource<newdoctor>(this.doctors);
  }

  getdoctors(){
    this.apiservice.getAllDoctors().subscribe(response=>{
      this.doctors = response;
      this.dataSource = new MatTableDataSource(this.doctors);
      console.log(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

  }


  applyFilter(event: Event) {
    // this.dataSource = new MatTableDataSource<AppointmentReq>(this.rapps);
    this.dataSource = new MatTableDataSource(this.doctors);
     const filterValue = (event.target as HTMLInputElement).value;
     console.log(this.doctors);
     this.dataSource.filter = filterValue.trim().toLowerCase();
   
     if (this.dataSource.paginator) {
       this.dataSource.paginator.firstPage();
     }
 
}

openForm(){
  this.dialog.open(AdminViewCreatedoctorComponent,{width:'50%'});
}

}
