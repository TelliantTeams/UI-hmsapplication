import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ThemePalette } from '@angular/material/core';  
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { users } from '../models/users';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmdialogComponent } from '../confirmdialog/confirmdialog.component';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  color: ThemePalette = "primary";
  submitted = false;
  User=new users();

  constructor(private authService: AuthService,public builder: FormBuilder,public dialog:MatDialog) { }

  registerForm=this.builder.group({
    username: ['',[Validators.required,Validators.pattern('^[_A-z0-9]*((-|s)*[_A-z0-9])*$')]],
    password: ['',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")]],
    dob:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    phone:['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    gender:['male',[Validators.required]]
  })


  get myForm() {
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted=true;
    if (!this.registerForm.valid) {
      alert('Please fill all the required fields !');
    
    } else {
      this.authService.registration(this.registerForm).subscribe(res => {
        this.registerForm.reset();
        this.User=res;
        console.log(this.User.displayname);
          const dialogRef = this.dialog.open(ConfirmdialogComponent, {
            data: { name: this.User.displayname }
          });         
     })

    }
  }

clearForm(){

  this.registerForm.reset();
}


}
