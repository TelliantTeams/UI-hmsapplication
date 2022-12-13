import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDetail } from '../models/LoginDetail';
import { users } from '../models/users';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginDetail = new LoginDetail();
  User=new users();
  submitted = false;
  isLoginFailed=false;
  isLoggedIn=false;
  errorMessage = '';

  constructor(private authService: AuthService,private router:Router) { }

  loginform = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  Login() {
    if (this.loginform.valid) {
    this.submitted = true;
    this.loginDetail.username = this.loginform.value.username;
    this.loginDetail.password = this.loginform.value.password;

    this.authService.login(this.loginDetail).subscribe({
      next: data => {
        
        this.User=data;

        if(this.User.type==1){
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          //this.reloadPage();
          this.router.navigate(['doctor-dashboard']);
        }
     },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
   }
  }

  get myForm() {
    return this.loginform.controls;
  }
  
  reloadPage(): void {
    window.location.reload();
  }

}
