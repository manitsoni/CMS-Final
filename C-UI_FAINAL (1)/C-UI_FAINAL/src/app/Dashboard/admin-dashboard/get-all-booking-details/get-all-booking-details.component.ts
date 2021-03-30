import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {Booking} from'src/app/shared/models/booking';
import {BookingService} from 'src/app/shared/services/booking.service';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-get-all-booking-details',
  templateUrl: './get-all-booking-details.component.html',
  styleUrls: ['./get-all-booking-details.component.css']
})
export class GetAllBookingDetailsComponent implements OnInit {

  isLogged = false;
  allShipmentDetails !: Observable<Booking[]>
  constructor(private spinner : NgxSpinnerService,private router: Router,private route: ActivatedRoute,private booking : BookingService,private token: TokenStorageService) {
    this.isLogged = this.token.isLogged;
    if(!this.isLogged)
    {
      //this.location.replaceState('/'); // clears browser history so they can't navigate with back button
      this.router.navigate(['login']);
    }
    
   }

  ngOnInit(): void {
    this.spinner.show();
    const ShipmentId = this.route.snapshot.params['id'];
    setTimeout(() => {
      this.allShipmentDetails = this.booking.getBookingDetails(ShipmentId);
      this.spinner.hide();
    }, 1000);
    
  }
  Back(){
    this.router.navigate(['/get-all-bookings'])
  }

}
