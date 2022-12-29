import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../api.service';

export interface Response {
  reason:any;
  visiting_data:any;
  status:any;
  dname:any;
  pname:any;
}


@Component({
  selector: 'app-admin-view-approvedrequests',
  templateUrl: './admin-view-approvedrequests.component.html',
  styleUrls: ['./admin-view-approvedrequests.component.css']
})

export class AdminViewApprovedrequestsComponent {

  myDate = new Date(); 

  aapps: any;
  //aapps : any[] = [];

  displayedColumns: string[] = ['S.No','Ref. No.','visiting_date', 'pname', 'dname', 'reason','actions'];
  //dataSource: MatTableDataSource<Response>;
  public dataSource: MatTableDataSource<Response>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  
  constructor(private apiService: ApiService) {
   
  }

  ngOnInit(){
    this.getaapps();
    const dataSource = new MatTableDataSource<Response>(this.aapps);
  }

  getaapps(){
    this.apiService.getApprovedAppointment().subscribe(response=>{
    this.aapps = response;
    this.dataSource = new MatTableDataSource(this.aapps);
    console.log(response);
    this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  });

  }

  applyFilter(event: Event) {
    // this.dataSource = new MatTableDataSource<AppointmentReq>(this.rapps);
    this.dataSource = new MatTableDataSource(this.aapps);
     const filterValue = (event.target as HTMLInputElement).value;
     console.log(this.aapps);
     this.dataSource.filter = filterValue.trim().toLowerCase();
   
     if (this.dataSource.paginator) {
       this.dataSource.paginator.firstPage();
     }
 
}
}
