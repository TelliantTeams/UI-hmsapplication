import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-view-npaymentwindow',
  templateUrl: './admin-view-npaymentwindow.component.html',
  styleUrls: ['./admin-view-npaymentwindow.component.css']
})
export class AdminViewNpaymentwindowComponent {
  visiting_date:any;
  visiting_doctor_id: any;
  patient_id:any;
  slot_id: any;
  reason:any;
  paymentHandler: any;
  transaction_token: string;

  constructor(private apiService:ApiService,public router: Router,private http: HttpClient){
    
  }


  ngOnInit(){
    this.invokeStripe();
    this.visiting_date = moment(JSON.parse(localStorage.getItem(('visiting_date')) || '{}')).format("YYYY-MM-DD");
    console.log(moment(this.visiting_date).format("YYYY-MM-DD"))
    this.visiting_doctor_id = JSON.parse(localStorage.getItem('visiting_doctor_id') || '{}');
    console.log(this.visiting_doctor_id)
    this.patient_id = JSON.parse(localStorage.getItem('patient_id') || '{}');
    this.reason = JSON.parse(localStorage.getItem('reason') || '{}');
    this.slot_id = JSON.parse(localStorage.getItem('slot_id')|| '{}');
  }

  stripepay(){
    this.transaction_token = localStorage.getItem('token') || '{}';
    let data = {
      visiting_date: this.visiting_date,
      visiting_doctor_id: this.visiting_doctor_id,
      patient_id: this.patient_id,
      slot_id: this.slot_id,
      reason: this.reason,
      payment_status: "paid",
      transaction_token: this.transaction_token
   }
   console.log(data);

  }




  
  paylater(){
    

    let data = {
      visiting_date: this.visiting_date,
      visiting_doctor_id: this.visiting_doctor_id,
      patient_id: this.patient_id,
      slot_id: this.slot_id,
      reason: this.reason,
      payment_status: "Unpaid"
   }

    console.log(data);
    this.http.post('http://localhost:8080/appointmentdup/new', data).subscribe();
    console.log(data);
    localStorage.removeItem('visiting_date');
    localStorage.removeItem('visiting_doctor_id');
    localStorage.removeItem('patient_id');
    localStorage.removeItem('slot_id');
    localStorage.removeItem('reason');
    localStorage.removeItem('payment_status');
    alert("Appointment Booked Successfully");
    this.router.navigateByUrl('/admin-dashboard/dashboard');
  }

  
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51MOcaNSF8oJkNpj9WggM10kHsuOFQ7LcpUZ3O2CsJHJ4ei59oeG89WbkyKwujCQvdXc3NhjbUabRTVu8d0eJ3vJ500yrv6Zx6V',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }

  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      // key: 'pk_test_51H7bbSE2RcKvfXD4DZhu',
      key: 'pk_test_51MOcaNSF8oJkNpj9WggM10kHsuOFQ7LcpUZ3O2CsJHJ4ei59oeG89WbkyKwujCQvdXc3NhjbUabRTVu8d0eJ3vJ500yrv6Zx6V',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        console.log(stripeToken.id);
        localStorage.setItem('token', stripeToken.id);
        alert('Payment Successfull!');
        this.stripepay();
      },
    });
    paymentHandler.open({
      name: 'Stripe',
      description: 'Payment Gateway',
      amount: amount * 100,
    });
  }

}
