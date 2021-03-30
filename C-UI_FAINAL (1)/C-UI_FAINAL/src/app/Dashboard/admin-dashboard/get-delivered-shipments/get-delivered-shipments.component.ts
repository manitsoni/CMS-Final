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
  selector: 'app-get-delivered-shipments',
  templateUrl: './get-delivered-shipments.component.html',
  styleUrls: ['./get-delivered-shipments.component.css']
})
export class GetDeliveredShipmentsComponent implements OnInit {
  getDeliveredShipmentData !: Observable<Booking[]>;
  isLogged = false;
  filter!:string;
  p!:number;
  constructor(private spinner : NgxSpinnerService,private router: Router,private service : CustomerAdminService,private token: TokenStorageService) {
    this.isLogged = this.token.isLogged;
    if(!this.isLogged)
    {
      //this.location.replaceState('/'); // clears browser history so they can't navigate with back button
      this.router.navigate(['login']);
    }
    this.getDeliveredShipments();
   }
  ngOnInit(): void {
    this.isLogged = this.token.isLogged;
    this.spinner.show();
    this.getDeliveredShipments();
  }
  getDeliveredShipments(){
    setTimeout(() => {
      this.getDeliveredShipmentData = this.service.getDeliveredData();
      this.spinner.hide();
    }, 1000);
   
  }
  bookingDetails(ShipmentId : string){
    this.router.navigate(['/get-all-booking-details',ShipmentId])
  }

}
