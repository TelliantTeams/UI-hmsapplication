import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { newapp } from '../models/newapp';

@Component({
  selector: 'app-admin-view-nbookingform',
  templateUrl: './admin-view-nbookingform.component.html',
  styleUrls: ['./admin-view-nbookingform.component.css']
})
export class AdminViewNbookingformComponent {
  color: ThemePalette = "primary";
  submitted = false;
  Newapp = new newapp();
  minDate = new Date();
  maxDate = new Date();
  doctors: any;
  selected: string;
  pipe = new DatePipe('en-US');
  

  constructor(private apiService:ApiService,public builder: FormBuilder,public router: Router){
    this.minDate.setDate(this.minDate.getDate() + 1);
    this.maxDate.setDate(this.maxDate.getDate() + 15);
   
    
  }


 ngOnInit(){
    //  this.getdoctors();
    
   }

   ngAfterViewInit(){
    // this.getdoctors();
   }

   doctorsn(){
    this.getdoctors();
   }

  newbappForm=this.builder.group({
   patient_id: ['',Validators.required],
    visiting_doctor_id: ['',Validators.required],
    visiting_date:['',Validators.required],
    reason:['',Validators.required]

  })

  get myappForm(){
    return this.newbappForm.controls;
  }

  getdoctors(){
    this.apiService.getAllDoctors().subscribe(response=>{
      this.doctors = response;
      console.log(response);
    })

  }


  onSubmit(){
    this.submitted=true;
    console.log(this.newbappForm);
    localStorage.setItem('patient_id', JSON.stringify(this.newbappForm.value.patient_id));
    localStorage.setItem('visiting_date', JSON.stringify(this.newbappForm.value.visiting_date));
    localStorage.setItem('visiting_doctor_id', JSON.stringify(this.newbappForm.value.visiting_doctor_id));
    localStorage.setItem('reason', JSON.stringify(this.newbappForm.value.reason));
    if (!this.newbappForm.valid) {
      alert('Please fill all the required fields !');
    
      
    
    } else {
      this.apiService.newapp(this.newbappForm).subscribe(res => {
        this.newbappForm.reset();
        this.Newapp=res;
        console.log(res);
        this.router.navigateByUrl('/slotbooking');            
     })

    }
  }

 

  clearForm(){

    this.newbappForm.reset();
    //this.router.navigateByUrl('admin-dashboard/dashboard');
  }


  onOptionsSelected() {
    console.log(this.doctors); 
    // this.filtered = this.stat.filter(t=>t.value ==this.selected);

  }
}
