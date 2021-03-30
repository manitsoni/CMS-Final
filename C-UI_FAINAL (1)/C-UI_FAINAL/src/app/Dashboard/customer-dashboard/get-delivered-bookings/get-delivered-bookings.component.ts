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

@Component({
  selector: 'app-get-delivered-bookings',
  templateUrl: './get-delivered-bookings.component.html',
  styleUrls: ['./get-delivered-bookings.component.css']
})
export class GetDeliveredBookingsComponent implements OnInit {

  constructor(private formbulider: FormBuilder, private router: Router,private service : BookingService,private token: TokenStorageService) {
    this.isLogged = this.token.isLogged;
    if(!this.isLogged)
    {
      //this.location.replaceState('/'); // clears browser history so they can't navigate with back button
      this.router.navigate(['login']);
    }
   }
   
   isLogged = false;
   getMyShipments !: Observable<Booking[]>;
   p !: number;
   filter !:string;
  ngOnInit(): void {
    this.isLogged = this.token.isLogged;
    if(this.isLogged)
    {
      
    }
    this.GetMyOldShipments();
  }
  GetMyOldShipments(){
    this.getMyShipments = this.service.getDeliveredData();
  }

}
