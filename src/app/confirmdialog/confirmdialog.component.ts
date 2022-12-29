import { Component } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';  
import { Router } from '@angular/router';


@Component({
  selector: 'app-confirmdialog',
  templateUrl: './confirmdialog.component.html',
  styleUrls: ['./confirmdialog.component.css']
})
export class ConfirmdialogComponent {

  username:any;

  constructor(private router:Router, @Inject(MAT_DIALOG_DATA) public data:any) {
      this.username = data.name;
  }

  openLogin(){
     
    this.router.navigate(['']);
  }
}
