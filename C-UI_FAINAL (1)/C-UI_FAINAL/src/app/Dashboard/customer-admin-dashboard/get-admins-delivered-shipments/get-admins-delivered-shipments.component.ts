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
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-get-admins-delivered-shipments',
  templateUrl: './get-admins-delivered-shipments.component.html',
  styleUrls: ['./get-admins-delivered-shipments.component.css']
})
export class GetAdminsDeliveredShipmentsComponent implements OnInit {

  constructor(private spinner : NgxSpinnerService,private formbulider: FormBuilder, private router: Router,private service : CustomerAdminService,private token: TokenStorageService) {
    this.isLogged = true;
   }
   isLogged = false;
   filter!:string;
   p!:number;
   getMyShipments !: Observable<Booking[]>;

  ngOnInit(): void {
    this.isLogged = this.token.isLogged;
    if(this.isLogged)
    {
      this.spinner.show();
      this.GetMyOldShipments();
    }else{
      this.router.navigate(['/login']);
    }
   
  }
  GetMyOldShipments(){
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      this.getMyShipments = this.service.getAdminsDeliveredData();
    }, 1000);
   
  }


}
