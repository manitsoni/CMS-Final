import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {Quotation} from '../shared/models/quotation'
import {QuotationManageService} from '../shared/services/quotation-manage.service'
import { UserRegistrationService } from '../shared/services/user-registration.service';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../_services/token-storage.service';
import  Swal  from 'sweetalert2/dist/sweetalert2.js';  
import { NgxSpinnerService } from 'ngx-spinner';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-manage-quotation',
  templateUrl: './manage-quotation.component.html',
  styleUrls: ['./manage-quotation.component.css']
})
export class ManageQuotationComponent implements OnInit {
  id !: number;
  Form: any;
  massage!: string;
  data!: boolean;
  allQuotation : Observable<Quotation[]> | undefined;
  //FormBuilder: any;
  isLogged = false;
  submitted = false;
  rate =0;
  constructor(private spinner : NgxSpinnerService,private token: TokenStorageService,private FormBuilder: FormBuilder, private router: Router, private quotationManageService:QuotationManageService, private userRegistrationService : UserRegistrationService) { 
    this.isLogged = this.token.isLogged;
    debugger
    if(!this.isLogged)
    {
      debugger
      //this.location.replaceState('/'); // clears browser history so they can't navigate with back button
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    this.isLogged = this.token.isLogged;
    if(!this.isLogged)
    {
      //this.location.replaceState('/'); // clears browser history so they can't navigate with back button
      this.router.navigate(['/login']);
    }
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    this.Form = this.FormBuilder.group({
      SourceAddress1: ['', [Validators.required]],
      SourceAddress2: ['', [Validators.required]],
      SourceCity: ['', [Validators.required]],
      SourcePincode: ['', [Validators.required, Validators.pattern("^[0-9]{6}$")]],
      SourceState: ['', [Validators.required]],
      SourceCountry: ['', [Validators.required]],
      DestinationAddress1: ['', [Validators.required]],
      DestinationAddress2: ['', [Validators.required]],
      DestinationCity: ['', [Validators.required]],
      DestinationPincode: ['', [Validators.required, Validators.pattern("^[0-9]{6}$")]],
      DestinationState: ['', [Validators.required]],
      DestinationCountry: ['', [Validators.required]],
      Packagename: ['', [Validators.required]],
      Quantity: ['', [Validators.required, Validators.pattern("^[0-9]{1,}$")]],
      Width: ['', [Validators.required, Validators.pattern("^[0-9]{1,}$")]],
      Height: ['', [Validators.required, Validators.pattern("^[0-9]{1,}$")]],
      Lenght: ['', [Validators.required, Validators.pattern("^[0-9]{1,}$")]],
      Weight:['', [Validators.required, Validators.pattern("^[0-9]{1,}$")]],
    })
  }
  get quotationControl(){
    return this.Form.controls;
  }
  onFormSubmit(){
    this.spinner.show();
    this.submitted=true;
    
    const quotationValue = this.Form.value;
    if(this.Form.invalid)
    {
        this.spinner.hide();
        return;
    }else {
      alert("Thanks For Your Quotation With Cargovio, Please Click OK To Show Rate.")
    this.quotationManageService.GetRate(quotationValue.SourceCity,quotationValue.DestinationCity).subscribe(
      result =>{
        debugger
        var b =confirm("Rate For This Quotation Is 0: " + result);
        if(b == true)
        {
          this.rate = result;
          alert("Rate For This Quotation Is 01 : " + this.rate);
          quotationValue.Amount = this.rate;
          this.CreateQuotation(quotationValue)
          this.GetAllQuotations();
        }
        else
        {
          this.spinner.hide();
          alert("Please Change Details");
        }
       
      }
    );
    }

    
  
  }
  GetAllQuotations(){
    this.allQuotation = this.quotationManageService.GetQuotation();
  }
  CreateQuotation(formValue : Quotation)
  {
    this.quotationManageService.BookQuotation(formValue).subscribe(
      res => {
        this.id = res as unknown as number;
        console.log(formValue)
        this.quotationManageService.SetFormValue(formValue)
        this.router.navigate(['/get-quotation']);
        console.log(res);
        this.data = true;
        this.massage = 'Data saved Successfully';    
        this.spinner.hide();
        this.Form.reset();
        this.alertWithSuccess()
      },
      err =>{
        this.erroralert()
      }
    );
    this.router.navigate(['/get-quotation']);
    this.GetAllQuotations();
  }
  alertWithSuccess(){  
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your quotation has been saved',
      showConfirmButton: false,
      timer: 1500
    }) 
  }  
  erroralert()  
  {  
    Swal.fire({  
      icon: 'error',  
      title: 'Oops...',  
      text: 'Something went wrong!',  
      //footer: '<a href>Why do I have this issue?</a>'  
    })  
  }  
  userId(){
    return this.userRegistrationService.getUserId();
  }
  }


