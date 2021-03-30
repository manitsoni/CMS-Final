import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Router, RouterEvent} from '@angular/router';
import { PackageDetails } from '../../shared/models/package-details';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from 'src/app/shared/services/booking.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.css']
})
export class UpdateBookingComponent implements OnInit {
  isLogged = false;
  Form : any;
  packageDetails !: PackageDetails;
  Id!: number;
  UserId !: number;
  CreatedBy !: number;
  IsActive !: boolean;
  constructor(private token: TokenStorageService,private spinner : NgxSpinnerService,private formbulider: FormBuilder, private router:Router, private service:BookingService,private route : ActivatedRoute) {
    this.isLogged = this.token.isLogged;
    if(!this.isLogged){
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    this.Form = this.formbulider.group({
      Packagename: ['', [Validators.required]],
      Quantity: ['', [Validators.required]],
      Weight: ['', [Validators.required]],
      Height: ['', [Validators.required]],
      Width: ['', [Validators.required]],
      Lenght : ['',[Validators.required]],
    });
    this.spinner.show();
    const bookingId = this.route.snapshot.paramMap.get('id') as string;
    this.loadPackageDetails(bookingId);
  }
  loadPackageDetails(bookingId : string){
    setTimeout(() => {
      this.spinner.hide();
      this.service.GetPackageDetails(bookingId).subscribe(
        packageDetails => {
          this.Form.controls['Packagename'].setValue(packageDetails.Packagename);
          this.Form.controls['Quantity'].setValue(packageDetails.Quantity);
          this.Form.controls['Weight'].setValue(packageDetails.Weight);
          this.Form.controls['Height'].setValue(packageDetails.Height);
          this.Form.controls['Width'].setValue(packageDetails.Width);
          this.Form.controls['Lenght'].setValue(packageDetails.Lenght);
          this.Id = packageDetails.Id;
          this.UserId = packageDetails.UserId;
          this.CreatedBy = packageDetails.CreatedBy;
          this.IsActive = packageDetails.IsActive;
        });
    }, 1000);
   
  }
  onFormSubmit() {
    this.spinner.show();
    this.packageDetails = this.Form.value;
    this.packageDetails.Id = this.Id;
    this.packageDetails.UserId = this.UserId;
    this.packageDetails.CreatedBy = this.CreatedBy;
    this.packageDetails.IsActive = this.IsActive;
    this.UpdateBooking(this.packageDetails);
  }
  UpdateBooking(packageDetails : PackageDetails){
    debugger;
    this.service.UpdateBooking(packageDetails).subscribe(
      () => {
        this.alertWithSuccess()
        this.router.navigate(['/get-booking'])
        this.spinner.hide();
        this.Form.reset();
      });
  }
  alertWithSuccess(){  
    Swal.fire('Welcome...', 'Update Booking Success!', 'success')  
  }  
  erroalert()  
  {  
    Swal.fire({  
      icon: 'error',  
      title: 'Invalid Credentials',  
      text: 'Something went wrong!',  
      footer: '<a routerLink="/user-registration">U Want Registration?</a>'  
    })  
  }

}
