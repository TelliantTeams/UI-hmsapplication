import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdminViewCreatepatientComponent } from '../admin-view-createpatient/admin-view-createpatient.component';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { newpatient } from '../models/newpatient';

@Component({
  selector: 'app-admin-view-patient',
  templateUrl: './admin-view-patient.component.html',
  styleUrls: ['./admin-view-patient.component.css']
})
export class AdminViewPatientComponent {
  patients: any;
  displayedColumns: string[] = ['S.No','id', 'pname', 'page','pcontact', 'paddress','pheight','pweight','pbp','actions'];
  //dataSource: MatTableDataSource<Response>;
   public dataSource: MatTableDataSource<newpatient>;

  constructor(private apiservice:ApiService,private http:HttpClient,public dialog:MatDialog){

  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  ngOnInit(){
    this.getpatients();
    const dataSource = new MatTableDataSource<newpatient>(this.patients);
  }

  getpatients(){
    this.apiservice.getAllPatients().subscribe(response=>{
      this.patients = response;
      this.dataSource = new MatTableDataSource(this.patients);
      console.log(response);
      console.log(this.dataSource);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    // this.dataSource = new MatTableDataSource<dataSource>(this.rapps);
    // this.dataSource = this.patients;
    this.dataSource = new MatTableDataSource(this.patients);
     const filterValue = (event.target as HTMLInputElement).value;
     console.log(this.patients);
     this.dataSource.filter = filterValue.trim().toLowerCase();
   
     if (this.dataSource.paginator) {
       this.dataSource.paginator.firstPage();
     }
 
}

openForm(){
  console.log("dialogue opened!")
  this.dialog.open(AdminViewCreatepatientComponent,{width:'50%'});
}

// openForm(){
//   this.dialog.open(AdminViewCreatepatientComponent, {
//     maxWidth: '100vw',
//     maxHeight: '100vh',
//     height: '100%',
//     width: '100%',
//     panelClass: 'full-screen-modal'
//   });
// }
  
}
