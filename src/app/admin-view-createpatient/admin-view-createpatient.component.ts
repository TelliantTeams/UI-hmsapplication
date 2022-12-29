import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-view-createpatient',
  templateUrl: './admin-view-createpatient.component.html',
  styleUrls: ['./admin-view-createpatient.component.css']
})
export class AdminViewCreatepatientComponent {

  color: ThemePalette = "primary";
  submitted = false;
   
  
 
  constructor(public apiService:ApiService,public builder: FormBuilder){
  }

  newpatientForm= this.builder.group({
    username:  ['',Validators.required],
    password: ['',Validators.required],
    dob:  ['',Validators.required],
    email:  ['',Validators.required],
    contact:  ['',Validators.required],
    // age:  ['',Validators.required],
    gender:  ['',Validators.required],
    address:  ['',Validators.required],
    height:  ['',Validators.required],
    weight: ['',Validators.required],
    bp:  ['',Validators.required]
  })

  get mynewpatientForm(){
      return this.newpatientForm.controls;
  }

  onSubmit(){
    this.submitted=true;
    console.log(this.newpatientForm.value);
    if (!this.newpatientForm.valid) {
      alert('Please fill all the required fields !');
    
    } else {
      this.apiService.newpatient(this.newpatientForm).subscribe(res => {
        this.newpatientForm.reset();
      // this.Newpatient=res;
        console.log(res);
        alert('Patient Added Sucessfully');
        
                 
     });  

    }
   
  }

  clearForm(){

    this.newpatientForm.reset();
  }


}
