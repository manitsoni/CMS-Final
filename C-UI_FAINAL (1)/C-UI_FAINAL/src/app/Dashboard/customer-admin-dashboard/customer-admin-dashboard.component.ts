import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from 'src/app/_services/token-storage.service';
import {Router} from '@angular/router';
import  Swal  from 'sweetalert2/dist/sweetalert2.js'; 
import { Observable } from 'rxjs';
import { UserDetails } from '../../shared/models/user-details.model';
import { CustomerService } from '../../shared/services/customer.service';
import { CustomerAdminService } from '../../shared/services/customer-admin.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-customer-admin-dashboard',
  templateUrl: './customer-admin-dashboard.component.html',
  styleUrls: ['./customer-admin-dashboard.component.css']
})
export class CustomerAdminDashboardComponent implements OnInit {

  [x: string]: any;
  isLogged = false;
  constructor(private spinner : NgxSpinnerService,private router:Router,private token: TokenStorageService,private service:CustomerService,private Custservice:CustomerAdminService) { 
    this.isLogged = this.token.isLogged;
    if(!this.isLogged)
    {
      //this.location.replaceState('/'); // clears browser history so they can't navigate with back button
      this.router.navigate(['login']);
    }
    
  }
 
  allCustomerAdmins !: Observable<UserDetails[]>;
  ngOnInit(): void {
    this.isLogged = this.token.isLogged;
    if(this.isLogged)
    {
      this.spinner.show();
      this.loadCustomers();
    }

  }
  loadCustomers(){
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      this.allCustomerAdmins = this.Custservice.GetAllCustomer();
    }, 1000);
 
  }
  verifyCustomer(ID:number)
  {
    this.Custservice.VerifyCustomer(ID).subscribe(
      () => {
     
      this.alertWithSuccess();
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = "reload";
      const self = ".";
      this.router.navigate([self]);
      this.router.navigate(["/customer-admin-dashboard"]);
      this.loadCustomer();
    },
    err =>{
      this.erroalert(err.error.message);
    });
  }
  alertWithSuccess()
  {  
    Swal.fire('Congratulations!', 'Verification Done!', 'success')  
  }  
  erroalert(msg : string)  
  {  
    Swal.fire({  
      icon: 'error',  
      title: msg,  
      text: msg,  
      footer: '<a routerLink="/user-registration">U Want Registration?</a>'  
    })  
  }
}

