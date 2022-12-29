import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { resche } from '../models/resche';

@Component({
  selector: 'app-admin-view-reschedule',
  templateUrl: './admin-view-reschedule.component.html',
  styleUrls: ['./admin-view-reschedule.component.css']
})
export class AdminViewRescheduleComponent {

  id:any;
  Resche: resche;
  rschform: FormGroup;


  constructor(public apiService:ApiService, private route: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.apiService.findap(this.id).subscribe((data: resche)=>{
    this.Resche = data;
  });

  this.rschform = new FormGroup({
    visiting_date: new FormControl('', [Validators.required]),
});

}

get resch(){
  return this.rschform.controls;
}


submit(){
  console.log(this.rschform.value);
  console.log(this.id,this.rschform.value);
  this.apiService.rschdule(this.id, this.rschform.value).subscribe(res => {
    console.log('Updated sucessfully');
    console.log(res);
   this.router.navigateByUrl('admin-dashboard/App-Appointment');
  }
    )
}


cancel(){
  this.router.navigateByUrl('admin-dashboard/App-Appointment');
}

}
