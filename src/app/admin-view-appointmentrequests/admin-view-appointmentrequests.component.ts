import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../api.service';
import { AppointmentReq } from '../models/appointment-req';


@Component({
  selector: 'app-admin-view-appointmentrequests',
  templateUrl: './admin-view-appointmentrequests.component.html',
  styleUrls: ['./admin-view-appointmentrequests.component.css']
})
export class AdminViewAppointmentrequestsComponent{


  myDate = new Date(); 
  
 
  rapps: any;
  
  displayedColumns: string[] = ['App. ID','visiting_date', 'pname', 'dname', 'reason','actions'];
  
  public dataSource: MatTableDataSource<AppointmentReq>;

  
 // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
 // @ViewChild(MatSort) sort: MatSort;

 

  constructor(private apiService: ApiService,private httpclient:HttpClient) {
    
  }

  
   ngAfterViewInit() {
      //  this.getrapps()
      // this.dataSource = new MatTableDataSource<AppointmentReq>(this.rapps);
      // this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
      // console.log(this.dataSource.paginator);
   }

  ngOnInit(){
    this.getrapps();
    const dataSource = new MatTableDataSource<AppointmentReq>(this.rapps);
    
    
  }

   getrapps(){
    this.apiService.getPendingAppointment().subscribe(response=>{
      this.rapps = response;
    this.dataSource = new MatTableDataSource(this.rapps);
    console.log(this.dataSource)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.rapps);
      
    });
   }

   applyFilter(event: Event) {
   // this.dataSource = new MatTableDataSource<AppointmentReq>(this.rapps);
   this.dataSource = new MatTableDataSource(this.rapps);
    //this.dataSource = this.rapps;
    const filterValue = (event.target as HTMLInputElement).value;
  //  console.log(this.rapps);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  } 

  approve(id: any,pname:any) {
    this.apiService.reqapprove(id).subscribe(res => {
      console.log(id);
      alert(pname+" Request is Approved!");
      this.getrapps();
      
    });
    }

  reject(id: any,pname:any) {
    this.apiService.reqreject(id).subscribe(res => {
      console.log(id);
      alert(pname+" Request is Rejected!");
      this.getrapps();
    });
      }
   
}
