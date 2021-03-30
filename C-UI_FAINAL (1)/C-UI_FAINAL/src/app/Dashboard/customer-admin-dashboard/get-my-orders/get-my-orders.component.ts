import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from 'src/app/_services/token-storage.service';
import {Router} from '@angular/router';
import  Swal  from 'sweetalert2/dist/sweetalert2.js'; 
import { Observable } from 'rxjs';
import { BookingService } from 'src/app/shared/services/booking.service';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { CustomerAdminService } from 'src/app/shared/services/customer-admin.service';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Booking } from 'src/app/shared/models/booking';
import { CargoStatus } from 'src/app/shared/models/cargo-status';
import { OfficeList } from 'src/app/shared/models/office-list';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-get-my-orders',
  templateUrl: './get-my-orders.component.html',
  styleUrls: ['./get-my-orders.component.css']
})
export class GetMyOrdersComponent implements OnInit {
  allStatus : CargoStatus[] | undefined;
  allOffice : OfficeList[] | undefined;
  selectedStatus : number | undefined;
  selectedOffice : number | undefined;
  TrackingForm : any;
  filter!:string;
  p!:number;
  constructor(private spinner:NgxSpinnerService,private formbulider: FormBuilder, private router: Router,private service : CustomerAdminService,private token: TokenStorageService) {
    this.isLogged = true;
    if(!this.isLogged){
      this.router.navigate(['/login']);
    }
   }
   isLogged = false;
   getMyShipments !: Observable<Booking[]>;
  ngOnInit(): void {
    this.isLogged = this.token.isLogged;
    this.spinner.show();
    if(this.isLogged)
    {
      this.TrackingForm = this.formbulider.group({
        Status: ['', [Validators.required]],
        BookingId: ['', [Validators.required]],
        Office: ['', [Validators.required]]
      });
      this.GetStatus();
      this.GetOffice();
      this.GetMyShipments();
   }
  }
  GetOffice()
  {
   
    this.service.GetAllOffice().subscribe(
      data =>{
        this.allOffice = data;
       
      }
    )
  }
  onFormSubmit(){
    const trackingData = this.TrackingForm.value;
    console.log(trackingData);
    this.UpdateTracking(trackingData);
    this.GetMyShipments();
  }
  UpdateTracking(model:any)
  {
   this.service.UpdateTracking(model).subscribe(
      response=>
      {
        this.alertWithSuccess()
        this.GetMyShipments();
      }, err => {
        this.erroalert(err.error.message);
       
      });
  }
  alertWithSuccess(){  
    Swal.fire('Congratulations...', 'Tracking Status Update Success!', 'success')  
  }  
  erroalert(msg : string)  
  {  
    Swal.fire({  
      icon: 'error',
      text: msg 
    })  
  }
  GetStatus(){
   
     this.service.GetCargoStatus().subscribe(
       data =>{
         this.allStatus = data;
         console.log(this.allStatus);
       }
     );
  }
  GetMyShipments(){
    setTimeout(() => {
      this.spinner.hide();
      this.getMyShipments = this.service.GetMyShipments();
    }, 1000);
    
  }

}
