import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-view-createdoctor',
  templateUrl: './admin-view-createdoctor.component.html',
  styleUrls: ['./admin-view-createdoctor.component.css']
})
export class AdminViewCreatedoctorComponent {

  color: ThemePalette = "primary";
  submitted = false;
  router: any;

  constructor(private apiService: ApiService,public builder: FormBuilder){
  }

  newdoctorForm=this.builder.group({
    username:  ['',Validators.required],
    password: ['',Validators.required],
    address: ['',Validators.required],
    contact: ['',Validators.required],
    age: ['',Validators.required],
    qualification: ['',Validators.required],
    mail: ['',Validators.required]
  })

  get mynewdoctorForm(){
    return this.newdoctorForm.controls;
  }

  onSubmit(){
    this.submitted=true;
    console.log(this.newdoctorForm.value);
    if (!this.newdoctorForm.valid) {
      alert('Please fill all the required fields !');
    
    } else {
      this.apiService.newdoctor(this.newdoctorForm).subscribe(res => {
        this.newdoctorForm.reset();
      // this.Newpatient=res;
        console.log(res);
        alert('Doctor Added Sucessfully'); 
        this.router.navigateByUrl('admin-dashboard/Doctors');
     })

    }
  }

  clearForm(){

    this.newdoctorForm.reset();
    this.router.navigateByUrl('admin-dashboard/Doctors');
  }


}
