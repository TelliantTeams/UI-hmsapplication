import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { updatepatient } from '../models/updatepatient';


@Component({
  selector: 'app-admin-view-editpatient',
  templateUrl: './admin-view-editpatient.component.html',
  styleUrls: ['./admin-view-editpatient.component.css']
})
export class AdminViewEditpatientComponent {

  id:any;
  Updatepatient: updatepatient;
  pupdateform: FormGroup;

  constructor(public apiService:ApiService, private route: ActivatedRoute,
    private router: Router){
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.apiService.findp(this.id).subscribe((data: updatepatient)=>{
    this.Updatepatient = data;
  });

  this.pupdateform = new FormGroup({
    pcontact: new FormControl('', [Validators.required]),
    paddress: new FormControl('', Validators.required),
    pheight: new FormControl('', Validators.required),
    pweight: new FormControl('',Validators.required),
    pbp: new FormControl('',Validators.required)

});
}

get pu(){
  return this.pupdateform.controls;
}

submit(){
  console.log(this.pupdateform.value);
  console.log(this.id,this.pupdateform.value);
  this.apiService.updatepat(this.id, this.pupdateform.value).subscribe(res => {
    console.log('Updated sucessfully');
    console.log(res);
    this.router.navigateByUrl('admin-dashboard/Patients');
  }
    )
}

cancel(){
  this.router.navigateByUrl('admin-dashboard/Patients');
}

}
