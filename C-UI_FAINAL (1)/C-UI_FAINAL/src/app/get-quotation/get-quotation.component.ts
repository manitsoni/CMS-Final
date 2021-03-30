import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {Quotation} from '../shared/models/quotation'
import {QuotationManageService} from '../shared/services/quotation-manage.service'
import { UserRegistrationService } from '../shared/services/user-registration.service';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../_services/token-storage.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-get-quotation',
  templateUrl: './get-quotation.component.html',
  styleUrls: ['./get-quotation.component.css']
})
export class GetQuotationComponent implements OnInit {
  allQuotation!: Observable<Quotation[]>;
  isLogged = false;
  filter!:string;
  p!:number;
  constructor(private spinner: NgxSpinnerService,private router: Router,private quotationManageService : QuotationManageService,private token: TokenStorageService) {
    this.isLogged = this.token.isLogged;
    if(!this.isLogged)
    {
      //this.location.replaceState('/'); // clears browser history so they can't navigate with back button
      this.router.navigate(['/login']);
    }
    this.GetAllQuotations();
   }

  ngOnInit(): void {
    this.spinner.show();
    this.isLogged = this.token.isLogged;
    this.GetAllQuotations();
  }
  GetAllQuotations(){
    setTimeout(() => {
      this.spinner.hide();
      this.allQuotation = this.quotationManageService.GetQuotation();
    }, 1000);
   
  }
}