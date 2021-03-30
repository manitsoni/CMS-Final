import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import {OfficeRegService} from '../shared/services/office-reg.service'
import {OfficeDetails} from '../shared/models/office-details'
import {UserRegistrationService} from '../shared/services/user-registration.service'
import  Swal  from 'sweetalert2/dist/sweetalert2.js'; 
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-office-registration',
  templateUrl: './office-registration.component.html',
  styleUrls: ['./office-registration.component.css']
})
export class OfficeRegistrationComponent implements OnInit {
  Form:any;
  data !: boolean;
  massage !: string;
  submitted = false; 

  officeDetails !: OfficeDetails;  
  tempUid = "";
  constructor(private spinner : NgxSpinnerService,private formbulider: FormBuilder, private router:Router, private officeRegService:OfficeRegService, private userRegistrationService : UserRegistrationService) {
   }


  ngOnInit(): void {
    this.Form = this.formbulider.group({
      BranchLocation: ['', [Validators.required]],
      City: ['', [Validators.required]],
      State: ['', [Validators.required]],
      Country: ['', [Validators.required]],
      Pincode: ['', [Validators.required]],
    });
  }
  get officeregisterControl(){
    return this.Form.controls;
  }
  onFormSubmit() {
    this.submitted = true;

    const {BranchLocation,City,State,Country, Pincode} = this.Form.value; 

    const User_Id = this.userId() as number;
    const office = { BranchLocation: BranchLocation, City: City, State: State, Country: Country, Pincode: Pincode, UserId: User_Id } as unknown as OfficeDetails;


    // const office = { officeData, User_Id } as OfficeDetails;
    this.spinner.show();
    this.OfficeRegister(office);   
    
  }
  OfficeRegister(office : OfficeDetails){
    debugger;
      this.officeRegService.OfficeRegister(office).subscribe(
        res => {
          const msg =res as unknown as string;
          this.alertWithSuccess(msg);
          this.router.navigate(['/login']);
          this.spinner.hide();
          this.data = true;
          this.massage = 'Data saved Successfully';    
          this.Form.reset();
        },
        err =>{
          this.erroalert(err.error.message);
          this.router.navigate(['/user-registration']);
        }
      );
  }

  userId(){
    return this.userRegistrationService.getUserId();
  }
  alertWithSuccess(msg : string){  
    Swal.fire({  
      icon: 'success',    
      text: msg,  
      footer: '<a routerLink="/user-registration">U Want Registration?</a>'  
    })    
  }  
  erroalert(msg :string)  
  {  
    Swal.fire({  
      icon: 'error',  
      title: 'Invalid Data',  
      text: 'Something went wrong!',  
      footer: '<a routerLink="/user-registration">U Want Registration?</a>'  
    })  
  }
  informalert()  
  {  
    Swal.fire({  
      icon: 'error',  
      title: 'Please First Register Your Account',  
      text: 'Something went wrong!',  
      footer: '<a routerLink="/user-registration">U Want To Need Registration</a>'  
    })  
  }

}
