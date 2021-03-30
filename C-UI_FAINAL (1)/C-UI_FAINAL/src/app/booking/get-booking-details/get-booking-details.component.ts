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
  selector: 'app-get-booking-details',
  templateUrl: './get-booking-details.component.html',
  styleUrls: ['./get-booking-details.component.css']
})
export class GetBookingDetailsComponent implements OnInit {
  isLogged = false;
  allShipmentDetails !: Observable<Booking[]>
  constructor(private spinner: NgxSpinnerService,private router: Router,private route: ActivatedRoute,private booking : BookingService,private token: TokenStorageService) {
    this.isLogged = this.token.isLogged;
    if(!this.isLogged)
    {
      //this.location.replaceState('/'); // clears browser history so they can't navigate with back button
      this.router.navigate(['login']);
    }
    this.spinner.show();
   }
  ngOnInit(): void 
  {
    this.spinner.show();
    const ShipmentId = this.route.snapshot.params['id'];
    this.getData(ShipmentId);
  }
  getData(ShipmentId : string)
  {
    setTimeout(() => {
      this.spinner.hide();
      this.allShipmentDetails = this.booking.getBookingDetails(ShipmentId);
    }, 1000);
  }
  Back()
  {
    this.router.navigate(['/get-booking'])
  }

}
