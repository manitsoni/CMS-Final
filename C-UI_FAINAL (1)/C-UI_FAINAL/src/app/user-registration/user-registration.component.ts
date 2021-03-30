import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {UserDetails} from '../shared/models/user-details.model'
import {UserRegistrationService} from '../shared/services/user-registration.service'
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { ICountry, IState, ICity } from 'country-state-city'

import  Swal  from 'sweetalert2/dist/sweetalert2.js'; 
import { CustomvalidationService } from '../_services/customvalidation.service';
import { OfficeList } from '../shared/models/office-list';
import { CustomerAdminService } from '../shared/services/customer-admin.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  allOffice : OfficeList[] | undefined;
  id !: number;
  data = false; 
  massage:string='';
  Form:any;
  submitted = false;
  route: any;

 
  constructor(private spinner: NgxSpinnerService,private token : TokenStorageService,private service : CustomerAdminService,private formbulider: FormBuilder, private router:Router, private userRegistrationService : UserRegistrationService,  private customValidator: CustomvalidationService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.spinner.show();
      this.GetOffice();
      
     this.Form = this.formbulider.group({
      UserName: ['', [Validators.required, Validators.minLength(8)]],
      Email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      Password: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9]{8,}$")]],
      ContactNo: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      Addressline1: ['', [Validators.required]],
      Addressline2: ['', [Validators.required]],
      City: ['', [Validators.required]],
      State: ['', [Validators.required]],
      Country: ['', [Validators.required]],
      Pincode: ['', [Validators.required, Validators.pattern("^[0-9]{6}$")]],
      Role: ['', [Validators.required]],
    });
   

   this.activatedRoute.queryParams.subscribe((params: { [x: string]: any; }) => {
    let state = params['State'];
    let country = params['Country'];
    let pincode = params['Pincode'];
   
});
  }
  

   get registerFormControl(){
     return this.Form.controls;
   }
   GetOffice()
   {
    
     this.service.GetAllOffice().subscribe(
       data =>{
        
         setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.allOffice = data;
          this.spinner.hide();
        }, 1000);
         console.log(this.allOffice)
       }
     )
   }
   onFormSubmit() {
    this.submitted = true;
    const formValue = this.Form.value;
    
    const role = this.Form.get('Role').value
    
    if(formValue.UserName == '' || formValue.Email=='' || formValue.Password==''
    || formValue.ContactNo=='' || formValue.Addressline1=='' || formValue.Addressline2==''
    || formValue.City=='' || formValue.State=='' || formValue.Country=='' 
    || formValue.Pincode=='' && formValue.Role=='')
    {
      Swal.fire({  
        icon: 'error',
        title: 'Please Fill All Details',
        timer: 1500
      }) 
      return;
    }
    else
    {
      this.spinner.show();
    this.CreateRegistration(formValue, role);
    }

  }
  CreateRegistration(formValue : UserDetails, role: string)
  {
      debugger;
      this.userRegistrationService.addUser(formValue, role).subscribe(
        (res: number) => {
          this.userRegistrationService.setUserId(res);
          this.id = res as number;
          sessionStorage.setItem("TempUId",this.id as unknown as string);
          
          if(role === "Customer")
            this.router.navigate(['/company-registration']);
          else 
            this.router.navigate(['/office-registration']);

          this.data = true;
          this.massage = 'Data saved Successfully';
          this.spinner.hide();
          this.alertWithSuccess();    
          this.Form.reset();
          
        });
        // , err => {
        //   this.erroalert(err.error.message);
         
        // });
  }

  alertWithSuccess(){  
    Swal.fire('Welcome...', 'Your registration is  succesfully!', 'success')  
  }  
  erroalert(msg : string)   
  {  
    Swal.fire({  
      icon: 'error',
        
      title: msg + ' OR '+'Email Already Exists, Please Use Differenr Email!'
        
    })  
  }
}
