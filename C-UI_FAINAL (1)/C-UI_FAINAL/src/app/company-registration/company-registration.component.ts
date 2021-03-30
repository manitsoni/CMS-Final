import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Router, RouterEvent} from '@angular/router';
import { CompanyDetails } from '../shared/models/company-details';
import { CompanyRegisService } from '../shared/services/company-regis.service';
import {UserRegistrationService} from '../shared/services/user-registration.service'
import  Swal  from 'sweetalert2/dist/sweetalert2.js'; 
import { OfficeList } from '../shared/models/office-list';
import { CustomerAdminService } from '../shared/services/customer-admin.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.css']
})
export class CompanyRegistrationComponent implements OnInit {
  Form:any;
  companyDetails !: CompanyDetails
  allOffice : OfficeList[] | undefined;
 
  constructor(private spinner : NgxSpinnerService,private formbulider: FormBuilder, private service1 : CustomerAdminService,private router:Router, private service:CompanyRegisService, private userRegistrationService : UserRegistrationService) { 
    const tempUid = sessionStorage.getItem("TempUId")
    console.log(tempUid);
    if(tempUid == "")
    {
      this.informalert();
      this.router.navigate(['/user-registration']);
    }
  }

  submitted = false

  // constructor(private formbulider: FormBuilder, private router:Router, private service:CompanyRegisService, private userRegistrationService : UserRegistrationService) { }


  ngOnInit(): void {
    this.GetOffice();
    this.Form = this.formbulider.group({
      CompanyName: ['', [Validators.required]],
      WebSiteLink: ['', [Validators.required]],
      CopmanyAddress1: ['', [Validators.required]],
      CopmanyAddress2: ['', [Validators.required]],
      City: ['', [Validators.required]],
      CompanySize : ['',[Validators.required]],
      State: ['', [Validators.required]],
      Country: ['', [Validators.required]],
      Pincode : ['', [Validators.required]],
    });
  }
  get companyregisterControl(){
    return this.Form.controls;
  }
  GetOffice()
   {
    
     this.service1.GetAllOffice().subscribe(
       data =>{
         this.allOffice = data;
         console.log(this.allOffice)
       }
     )
   }
  onFormSubmit() {
    const {CompanyName,WebSiteLink, Addressline1, AddressLine2, City, State,CompanySize, Country, Pincode} = this.Form.value; 
    this.submitted = true;
    // const {CompanyName,WebSiteLink, Addressline1, AddressLine2, City, State, Country, Pincode} = this.Form.value; 
     
    const User_Id = this.userId() as number;

    const company = {
      CompanyName: CompanyName,
      WebSiteLink: WebSiteLink,
      Addressline1: Addressline1,
      AddressLine2: AddressLine2,
      City: City,
      State: State,
      Pincode : Pincode,
      Country: Country,
      UserId: User_Id,
      CompanySize: CompanySize,
    } as unknown as CompanyDetails;
    
    if(company.CompanyName=='' || company.WebSiteLink=='' || company.CopmanyAddress1==''
    || company.CopmanyAddress2=='' || company.State=='' || company.City==''
    || company.Country=='' || company.Pincode=='')
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
      this.RegisterCompany(company);
    }
  }

  RegisterCompany(company:CompanyDetails)
  {
    this.service.RegisterCompany(company).subscribe(
    ()=>
    {
      this.router.navigate(['/login']);
      this.spinner.hide();
      this.alertWithSuccess();
      this.Form.reset();
    },
    err =>{
      this.erroalert();
    }
     );
  }

  userId(){
    debugger;
    return this.userRegistrationService.getUserId();
  }
  alertWithSuccess(){  
    Swal.fire('Great...', 'Your account create successfully!', 'success')  
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
  informalert()  
  {  
    Swal.fire({  
      icon: 'error',  
      title: 'Please First Register Your Account',  
      text: 'Something went wrong!',  
      footer: '<a routerLink="/user-registration">U Want Registration?</a>'  
    })  
  }
  

}
