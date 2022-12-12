import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginDetail } from '../models/LoginDetail';
import { users } from '../models/users';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http:HttpClient,private router : Router) { }


public registration(registerForm:NgForm){
this.http.post('http://localhost:8080/user/register', registerForm.value)
      .subscribe(res => {
         console.log('inside postmehtod of sub.function', res);//only objects
      })
}


login(loginDetails:LoginDetail):Observable<users>{
 return this.http.post<users>('http://localhost:8080/user/login', loginDetails);
      
  }
  
}

