import { Component, OnInit,NgZone  } from '@angular/core';
import { Booking } from '../shared/models/booking';
import {Router} from '@angular/router';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { TokenStorageService } from '../_services/token-storage.service';
import {BookingService} from '../shared/services/booking.service'
import  Swal  from 'sweetalert2/dist/sweetalert2.js';
import {AuthService} from 'src/app/_services/auth.service'
import { OfficeList } from '../shared/models/office-list';
import { CustomerAdminService } from '../shared/services/customer-admin.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  Form:any;
  bookingBtn !: boolean;
  paymentBtn !: boolean;
  userType = 3;
  totalAmount =0;
  paymentId ='remain';
  isLogged = false;
  submitted = false;
  allOffice : OfficeList[] | undefined;
  myOffice : OfficeList[] | undefined;
  data : Booking[] | undefined;
  constructor(private spinner: NgxSpinnerService,private _ngZone: NgZone,private auth : AuthService,private service : CustomerAdminService,private bookingService:BookingService,private FormBuilder: FormBuilder, private router:Router,private token: TokenStorageService) { 
    this.isLogged = this.token.isLogged;
    if(!this.isLogged)
    {
      //this.location.replaceState('/'); // clears browser history so they can't navigate with back button
      this.router.navigate(['login']);
    }
  }
  ngOnInit(): void {
    this.GetOffice();
    this.GetMyOffice();
    //this.isLogged = this.token.isLogged;
    this.isLogged = this.token.isLogged;
    this.bookingBtn = false;
    this.paymentBtn = false;
    if(!this.isLogged)
    {
      //this.location.replaceState('/'); // clears browser history so they can't navigate with back button
      this.router.navigate(['login']);
    }
    this.spinner.show();
    this.Form = this.FormBuilder.group({
      SourceAddress1: ['', [Validators.required]],
      SourceAddress2: ['', [Validators.required]],
      SourceCity: ['', [Validators.required]],
      SourceState: ['', [Validators.required]],
      SourceCountry: ['', [Validators.required]],
      SourcePincode: ['', [Validators.required]],
      DestinationAddress1: ['', [Validators.required]],
      DestinationAddress2: ['', [Validators.required]],
      DestinationCity: ['', [Validators.required]],
      DestinationState: ['', [Validators.required]],
      DestinationCountry: ['', [Validators.required]],
      DestinationPincode : ['', [Validators.required]],
      DocumentName: ['', [Validators.required]],
      DocumentNumber: ['', [Validators.required]],
      Packagename : ['', [Validators.required]],
      Quantity : ['', [Validators.required]],
      Width : ['', [Validators.required]],
      Height : ['', [Validators.required]],
      Lenght : ['', [Validators.required]],
      Weight : ['', [Validators.required]],
      Amount : ['', [Validators.required]]
    });
  }
  GetOffice()
  {
   
    this.service.GetAllOffice().subscribe(
      data =>{
        this.allOffice = data;
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 1000);
        console.log(this.allOffice)
      }
    )
  }
  GetMyOffice()
  {
   
    this.bookingService.GetMyOffice().subscribe(
      data =>{
       
        this.myOffice = data;
        console.log(this.allOffice)
      }
    )
  }

options = {
  key: 'rzp_test_flbeM0kDqz9KhH',
  amount :  this.totalAmount, // amount should be in paise format to display Rs 1255 without decimal point
  currency: 'INR',
  name: '', // company name or product name
  description: '',  // product description
  image: './assets/img/icons/cargovio.png',
  order_id: '', // order_id created by you in backend
  modal: {
    // We should prevent closing of the form when esc key is pressed.
    escape: false,
  },
  notes: {
    // include notes if any
  },
  theme: {
    color: '#0c238a'
  },
  "handler" : ((response : any, error : any) => {
    this.paymentId = response.razorpay_payment_id;
    console.log(this.paymentId);
    
    if(this.paymentId != ''){

      this.Payment(this.paymentId)
    }
    else{
      alert("Please Re-Payment, Then You Should Book The Shipments!")
    }
  
    // call your backend api to verify payment signature & capture transaction
  })
};
 


  onFormSubmit() {
  
    this.submitted= true;
    const quotationValue = this.Form.value;
    const rate = this.bookingService.GetRate(quotationValue.SourceCity,quotationValue.DestinationCity).subscribe(
      res =>{
        this.totalAmount = res * 100;
       
        alert("Total Amount For This Booking Is : " + res);
        quotationValue.Amount = rate;
      }
    );
    // Source Country & Pincode Validation Checking
    const sourcecountryName = this.Form.get('SourceCountry').value;
    
    var numbers = /^[0-9]{6}$/;
    if(!this.Form.get('SourcePincode').value.match(numbers))
    {
      // alert("Enter Valid Pincode")
      Swal.fire({  
        icon: 'error',
        title: 'Invalid Pincode',
        timer: 1500
      }) 
      return;
    }

   
    // Destination Country & Pincode Validation Checking
    const destinationcountryName = this.Form.get('DestinationCountry').value;
    
    var numbers = /^[0-9]{6}$/;
    if(!this.Form.get('DestinationPincode').value.match(numbers))
    {
      // alert("Enter Valid Pincode")
      Swal.fire({  
        icon: 'error',
        title: 'Invalid Pincode',
        timer: 1500
      }) 
      return;
    }

    

     // if(this.Form.inValid)
    // {
    //   debugger
    //   this.Form.markAllAsTouched(); 
    // }

    if(quotationValue.SourceAddress1 == '' || quotationValue.SourceAddress2=='' || quotationValue.SourceCity=='' || quotationValue.SourceCountry==''|| quotationValue.SourceState==''
    || quotationValue.DestinationAddress1=='' || quotationValue.DestinationAddress2==''|| quotationValue.DestinationCity=='' || quotationValue.DestinationCountry==''||  quotationValue.DestinationState=='' 
    || quotationValue.DocumentName=='' || quotationValue.DocumentNumber=='' 
    || quotationValue.Packagename==''|| quotationValue.Quantity=='' || quotationValue.Width=='' || quotationValue.Height=='' || quotationValue.Lenght==''|| quotationValue.Weight=='')
    {
      debugger
      Swal.fire({  
        icon: 'error',
        title: 'Please Fill All Details',
        timer: 1500
      }) 
      return;
    }
    else
    {
      this.Payment(this.paymentId);
    }    
  }

  get bookingControl(){
    return this.Form.controls;
  }
  Payment(PaymentID : string){
    this.spinner.show();
    if(PaymentID == 'remain'){
      
        this.options.amount = this.totalAmount;
        const rzp = new this.auth.nativeWindow.Razorpay(this.options);
        rzp.open();
        this.spinner.hide();
    }
    else{
      const quotationValue = this.Form.value;
      this.BookCargo(quotationValue);
      console.log(quotationValue);
    }
    
  }
  BookCargo(booking:Booking) {
   
    booking.TransactionId = this.paymentId;
    booking.PaymentType = "RazorPay"
    booking.Amount = this.totalAmount;
    console.log(booking);
    this.bookingService.BookCargo1(booking).subscribe(
      () =>{
        this.bookingService.SetFormValue(booking);
        
        this._ngZone.run(()=>{
         
          this.alertWithSuccess();
          
          this.router.navigate(['/get-booking']);
          this.spinner.hide();
          });
       
    },
    err =>{
      this.erroalert();
    })
    
  }
  
  alertWithSuccess(){  
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your booking has been saved',
      showConfirmButton: false,
      timer: 1500
    }) 
  }  
  erroalert()  
  {  
    Swal.fire({  
      icon: 'error',  
      title: 'Oops...',  
      text: 'Something went wrong!',  
      footer: '<a href>Why do I have this issue?</a>'  
    })  
  } 

}
