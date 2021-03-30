import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import {Router} from '@angular/router';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgxSpinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  isLogged = false;
  Form:any;
  shipmentid : string ="";
  constructor(private spinner: NgxSpinnerService,private router:Router,private token: TokenStorageService,private FormBuilder: FormBuilder) { 
    this.isLogged = this.token.isLogged;
    if(!this.isLogged)
    {
      //this.location.replaceState('/'); // clears browser history so they can't navigate with back button
      this.router.navigate(['login']);
    }
  }
  

  ngOnInit(): void {
    this.isLogged = this.token.isLogged;
    if(this.isLogged)
    {
      
    }
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
    this.Form = this.FormBuilder.group({
      SourceAddress1: ['', [Validators.required]],});
  }
  showText(title:string) {
    if(title!="")
    {
      this.router.navigate(['/get-booking-details',title])
    }
    else
    {
      alert("Fill The Shipmentid");
    }
  }
}
