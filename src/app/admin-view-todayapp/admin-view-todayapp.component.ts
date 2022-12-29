import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../api.service';
import { AppointmentReq } from '../models/appointment-req';

@Component({
  selector: 'app-admin-view-todayapp',
  templateUrl: './admin-view-todayapp.component.html',
  styleUrls: ['./admin-view-todayapp.component.css']
})
export class AdminViewTodayappComponent {
  tapps: any;
  myDate = new Date(); 

  displayedColumns: string[] = ['S.No','pname','dname','reason'];
 // dataSource: MatTableDataSource<Response>;
  public dataSource: MatTableDataSource<AppointmentReq>;
  constructor(private apiService: ApiService) {
   
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit(){
    this.gettapps();
    const dataSource = new MatTableDataSource<AppointmentReq>(this.tapps);
  }

  gettapps(){
    this.apiService.getTodayAppointment().subscribe(response=>{
    this.tapps = response;
    this.dataSource = new MatTableDataSource(this.tapps);
    console.log(response);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  });
}

applyFilter(event: Event) {
  // this.dataSource = new MatTableDataSource<AppointmentReq>(this.rapps);
   //this.dataSource = this.tapps;
   this.dataSource = new MatTableDataSource(this.tapps);
   const filterValue = (event.target as HTMLInputElement).value;
   console.log(this.tapps);
   this.dataSource.filter = filterValue.trim().toLowerCase();
 
   if (this.dataSource.paginator) {
     this.dataSource.paginator.firstPage();
   }

}

}
