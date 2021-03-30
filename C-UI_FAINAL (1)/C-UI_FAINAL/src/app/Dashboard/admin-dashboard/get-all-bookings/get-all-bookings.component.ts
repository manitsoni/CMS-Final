import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {Booking} from'src/app/shared/models/booking';
import {BookingService} from 'src/app/shared/services/booking.service';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { CustomerAdminService } from 'src/app/shared/services/customer-admin.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-get-all-bookings',
  templateUrl: './get-all-bookings.component.html',
  styleUrls: ['./get-all-bookings.component.css']
})
export class GetAllBookingsComponent implements OnInit {
  filter!:string;
  p!:number;
  getBooking !: Observable<Booking[]>;
  isLogged = false;
  constructor(private spinner : NgxSpinnerService,private router: Router,private service : CustomerAdminService,private token: TokenStorageService) {
    this.isLogged = this.token.isLogged;
    if(!this.isLogged)
    {
      //this.location.replaceState('/'); // clears browser history so they can't navigate with back button
      this.router.navigate(['login']);
    }
    this.spinner.show();
    this.getBookingData();
   }

  ngOnInit(): void {
    this.isLogged = this.token.isLogged;
    this.getBookingData();
  }
  getBookingData(){
    setTimeout(() => {
      this.getBooking = this.service.getBooking();
      this.spinner.hide();
    }, 1000);
   
  }
  bookingDetails(ShipmentId : string){
    this.router.navigate(['/get-all-booking-details',ShipmentId])
  }
}
