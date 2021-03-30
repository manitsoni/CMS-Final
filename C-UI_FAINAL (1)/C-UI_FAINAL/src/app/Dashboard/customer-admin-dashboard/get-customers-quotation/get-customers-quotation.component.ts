import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {Quotation} from 'src/app/shared/models/quotation'
import {QuotationManageService} from 'src/app/shared/services/quotation-manage.service'
import { UserRegistrationService } from 'src/app/shared/services/user-registration.service';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-get-customers-quotation',
  templateUrl: './get-customers-quotation.component.html',
  styleUrls: ['./get-customers-quotation.component.css']
})
export class GetCustomersQuotationComponent implements OnInit {

  allQuotation!: Observable<Quotation[]>;
  isLogged = false;
  filter!:string;
  p!:number;
  constructor(private router: Router,private quotationManageService : QuotationManageService,private token: TokenStorageService) {
    this.isLogged = this.token.isLogged;
    if(!this.isLogged)
    {
      //this.location.replaceState('/'); // clears browser history so they can't navigate with back button
      this.router.navigate(['login']);
    }
   }

  ngOnInit(): void {
    this.isLogged = this.token.isLogged;
    this.GetAllQuotations();
  }
  GetAllQuotations(){

    this.allQuotation = this.quotationManageService.GetQuotationForAdmin();
  }

}
