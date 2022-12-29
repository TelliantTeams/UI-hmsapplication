import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ApiService } from '../api.service';
import { FormGroup } from '@angular/forms';
import { newdoctor } from '../models/newdoctor';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-view-editdoctor',
  templateUrl: './admin-view-editdoctor.component.html',
  styleUrls: ['./admin-view-editdoctor.component.css']
})
export class AdminViewEditdoctorComponent implements OnInit {

id:any;
Newdoctor: newdoctor;
form: FormGroup;

constructor(public apiService:ApiService, private route: ActivatedRoute,
  private router: Router){
}

ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  this.apiService.find(this.id).subscribe((data: newdoctor)=>{
  this.Newdoctor = data;
});

this.form = new FormGroup({
    contact: new FormControl('', [Validators.required]),
    qualification: new FormControl('', Validators.required),
    mail: new FormControl('', Validators.required)
});
}

get f(){
  return this.form.controls;
}

submit(){
  console.log(this.form.value);
  console.log(this.id,this.form.value);
  this.apiService.updatedoc(this.id, this.form.value).subscribe(res => {
    console.log('Updated sucessfully');
    console.log(res);
    this.router.navigateByUrl('admin-dashboard/Doctors');
  }
    )
}

cancel(){
  this.router.navigateByUrl('admin-dashboard/Doctors');
}

}
