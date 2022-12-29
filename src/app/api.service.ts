import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { newapp } from './models/newapp';
import { newpatient } from './models/newpatient';
import { newdoctor } from './models/newdoctor';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  findap(id: any):Observable<any>{
    return this.httpClient.get('http://localhost:8080/appointment/find/'+id)
  }

  find(id: any):Observable<any>{
     return this.httpClient.get('http://localhost:8080/doctor/find/'+id);
  }

  findp(id: any):Observable<any>{
    return this.httpClient.get('http://localhost:8080/patient/find/'+id);
 }


  
  
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
    return this.httpClient.get('http://localhost:8080/appointment/pendingapp');
  }

  getAllReqApp(){
    return this.httpClient.get('http://localhost:8080/appointment/reqapp');
  }

  getApprovedAppointment(){
    return this.httpClient.get('http://localhost:8080/appointment/approvedapp');
  }

  getAllDoctors(){
    return this.httpClient.get('http://localhost:8080/doctor/all');
  }

  getAllPatients(){
    return this.httpClient.get('http://localhost:8080/patient/all');
  }

  public newapp(newappForm:any){
    return this.httpClient.post<newapp>('http://localhost:8080/appointment/new', newappForm.value);       
  }

  public newpatient(newpatientForm:any){
    return this.httpClient.post<newpatient>('http://localhost:8080/user/register', newpatientForm.value);
  }

  public newdoctor(newdoctorForm:any){
    return this.httpClient.post<newdoctor>('http://localhost:8080/user/registerdoctor', newdoctorForm.value);
  }


  public updatedoc(id: any, data:any): Observable<any> {
    console.log(data);
    return this.httpClient.post('http://localhost:8080/doctor/update/'+id, data);
  }

  public updatepat(id: any, data:any): Observable<any> {
    console.log(data);
    return this.httpClient.post('http://localhost:8080/patient/update/'+id, data);
  }

  public reqapprove(id: any): Observable<any>{
    console.log(id);
    console.log("http://localhost:8080/appointment/approveapp/"+id)
    return this.httpClient.post('http://localhost:8080/appointment/approveapp/'+id,null);
  }

  public reqreject(id: any): Observable<any>{
    console.log(id);
    console.log("http://localhost:8080/appointment/rejectapp/"+id)
    return this.httpClient.post('http://localhost:8080/appointment/rejectapp/'+id,null);
  }

  public rschdule(id: any, data:any): Observable<any> {
    console.log(data);
    return this.httpClient.post('http://localhost:8080/appointment/reschedule/'+id, data);
  }
  

}
