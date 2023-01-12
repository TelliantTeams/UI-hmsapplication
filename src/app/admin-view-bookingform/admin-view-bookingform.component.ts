import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ApiService } from '../api.service';
import { newapp } from '../models/newapp';
import { DatePipe } from "@angular/common";


@Component({
  selector: 'app-admin-view-bookingform',
  templateUrl: './admin-view-bookingform.component.html',
  styleUrls: ['./admin-view-bookingform.component.css']
})
export class AdminViewBookingformComponent {
 
  color: ThemePalette = "primary";
  submitted = false;
  Newapp = new newapp();
  minDate = new Date();
  maxDate = new Date();
  router: any;
  doctors: any;
  selected: string;
  pipe = new DatePipe('en-US');

  constructor(private apiService:ApiService,public builder: FormBuilder){
    this.minDate.setDate(this.minDate.getDate() + 1);
    this.maxDate.setDate(this.maxDate.getDate() + 15);
   
    
  }


 ngOnInit(){
    //  this.getdoctors();
    
   }

   ngAfterViewInit(){
    this.getdoctors();
   }


  newappForm=this.builder.group({
   patient_id: ['',Validators.required],
    visiting_doctor_id: ['',Validators.required],
    reason:['',Validators.required],
    visiting_date:['',Validators.required],
  

  })

  get myappForm(){
    return this.newappForm.controls;
  }

  getdoctors(){
    this.apiService.getAllDoctors().subscribe(response=>{
      this.doctors = response;
      console.log(response);
    })

  }


  onSubmit(){
    this.submitted=true;
    
    console.log(this.newappForm);
    if (!this.newappForm.valid) {
      alert('Please fill all the required fields !');
      
    
    } else {
      this.apiService.newapp(this.newappForm).subscribe(res => {
        this.newappForm.reset();
        this.Newapp=res;
        console.log(res);
        alert('Appointment Booked Successfully!');
        //this.router.navigateByUrl('admin-dashboard/dashboard');
             
     })

    }
  }

 

  clearForm(){

    this.newappForm.reset();
    //this.router.navigateByUrl('admin-dashboard/dashboard');
  }


  onOptionsSelected() {
    console.log(this.doctors); 
    // this.filtered = this.stat.filter(t=>t.value ==this.selected);

  }
}
