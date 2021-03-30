import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {Quotation} from 'src/app/shared/models/quotation'

import { UserRegistrationService } from 'src/app/shared/services/user-registration.service';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { CustomerAdminService } from 'src/app/shared/services/customer-admin.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-get-quotation-details',
  templateUrl: './get-quotation-details.component.html',
  styleUrls: ['./get-quotation-details.component.css']
})
export class GetQuotationDetailsComponent implements OnInit {
  filter!:string;
  p!:number;
  allQuotation!: Observable<Quotation[]>;
  isLogged = false;
  constructor(private spinner : NgxSpinnerService,private router: Router,private service : CustomerAdminService,private token: TokenStorageService) {
    this.isLogged = this.token.isLogged;
    if(!this.isLogged)
    {
      //this.location.replaceState('/'); // clears browser history so they can't navigate with back button
      this.router.navigate(['login']);
    }
   }

  ngOnInit(): void {
    this.spinner.show();
    this.isLogged = this.token.isLogged;
    this.GetAllQuotations();
  }
  GetAllQuotations(){
    setTimeout(() => {
     
      this.spinner.hide();
    }, 1000);
    this.allQuotation = this.service.GetQuotation();
    
  }

}
