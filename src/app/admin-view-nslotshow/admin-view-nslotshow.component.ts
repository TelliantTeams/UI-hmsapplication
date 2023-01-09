import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';
import { getLocaleDateFormat } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ApiService } from '../api.service';
import { newapp } from '../models/newapp';

@Component({
  selector: 'app-admin-view-nslotshow',
  templateUrl: './admin-view-nslotshow.component.html',
  styleUrls: ['./admin-view-nslotshow.component.css']
})
export class AdminViewNslotshowComponent {
 visiting_date:any;
 visiting_doctor_id: any;
 slot_id: any;
 value = 0;
 Newapp = new newapp();
  s1: any;
  s2: any;
  s3: any;
  s4: any;


  

  constructor(private apiService:ApiService,public router: Router){
    
  }

  // let visiting_date: any = JSON.parse(localStorage.getItem("visiting_date"));
  // let visiting_doctor_id: any = JSON.parse(localStorage.getItem("visiting_doctor_id"))

  ngOnInit(){
     this.visiting_date = moment(JSON.parse(localStorage.getItem(('visiting_date')) || '{}')).format("YYYY-MM-DD");
     console.log(moment(this.visiting_date).format("YYYY-MM-DD"))
     this.visiting_doctor_id = JSON.parse(localStorage.getItem('visiting_doctor_id') || '{}');
     console.log(this.visiting_doctor_id)
     this.getAcount();
     this.getBcount();
     this.getCcount();
     this.getDcount();
   }

 
 

   getAcount(){
    this.apiService.slot1(1011,this.visiting_date,this.visiting_doctor_id).subscribe(response=> {
      this.s1 = response;
      this.s1 = 20 - response;
           console.log(response);
      
    })
   }

   getBcount(){
    this.apiService.slot1(1012,this.visiting_date,this.visiting_doctor_id).subscribe(response=> {
      this.s2 = response;
      this.s2 = 20 - response;
           console.log(response);
    })
   }

   getCcount(){
    this.apiService.slot1(1013,this.visiting_date,this.visiting_doctor_id).subscribe(response=> {
      this.s3 = response;
      this.s3 = 20 - response;
           console.log(response);
    })
   }

   getDcount(){
    this.apiService.slot1(1014,this.visiting_date,this.visiting_doctor_id).subscribe(response=> {
      this.s4 = response;
      this.s4 = 20 - response;
           console.log(response);
    })
   }

   raise(){
    localStorage.setItem('slot_id', '1011');
   }

   raise2(){
    localStorage.setItem('slot_id', '1012');
   }

   raise3(){
    localStorage.setItem('slot_id', '1013')
   }

   raise4(){
    localStorage.setItem('slot_id', '1014')
   }

   onSubmit(){
    console.log("yee");
    this.router.navigateByUrl('/newbookingform');
   }

}
