import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http: any;

  constructor(private httpClient: HttpClient) { }

  getDoctorCount(){
    return this.httpClient.get('http://localhost:8080/doctor/count'); 
  }

  getPatientCount(){
    return this.httpClient.get('http://localhost:8080/patient/count');
  }

  getTodayAppointment(){
    return this.httpClient.get('http://localhost:8080/appointment/todayapp');
  }

  getPendingAppointment(){
    return this.httpClient.get('http://localhost:8080/appointment/pendingapp')
  }
}
