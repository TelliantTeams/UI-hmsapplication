import { Component } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';  


@Component({
  selector: 'app-confirmdialog',
  templateUrl: './confirmdialog.component.html',
  styleUrls: ['./confirmdialog.component.css']
})
export class ConfirmdialogComponent {

  username:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) {
      this.username = data.name;
  }

}
