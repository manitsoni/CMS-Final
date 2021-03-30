import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {Booking} from'src/app/shared/models/booking';
import {BookingService} from 'src/app/shared/services/booking.service';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-get-booking',
  templateUrl: './get-booking.component.html',
  styleUrls: ['./get-booking.component.css']
})
export class GetBookingComponent implements OnInit {
  getBooking !: Observable<Booking[]>;
  isLogged = false;
  filter !:string;
  p!:number;
  constructor(private spinner: NgxSpinnerService,private router: Router,private booking : BookingService,private token: TokenStorageService) {
    this.isLogged = this.token.isLogged;

    if(!this.isLogged)
    {
      //this.location.replaceState('/'); // clears browser history so they can't navigate with back button
      this.router.navigate(['login']);
    }
   
    this.getBookingData();
   }

  ngOnInit(): void {
  
    this.isLogged = this.token.isLogged;
    this.spinner.show();


    this.getBookingData();
  }
  getBookingData(){
    setTimeout(() => {
      this.spinner.hide();
      this.getBooking = this.booking.getBooking();
    }, 1000);
  }
  bookingDetails(ShipmentId : string){
    this.router.navigate(['/get-booking-details',ShipmentId])
  }
  updateBooking(ID : number){
    this.router.navigate(['/update-booking',ID])
  }
}
