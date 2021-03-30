import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import {Router} from '@angular/router';
import  Swal  from 'sweetalert2/dist/sweetalert2.js'; 
import { Observable } from 'rxjs';
import { UserDetails } from 'src/app/shared/models/user-details.model';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { CustomerAdminService } from 'src/app/shared/services/customer-admin.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-get-my-customer',
  templateUrl: './get-my-customer.component.html',
  styleUrls: ['./get-my-customer.component.css']
})
export class GetMyCustomerComponent implements OnInit {

  isLogged = false;
  filter!:string;
  p!:number;
  constructor(private spinner : NgxSpinnerService,private router:Router,private token: TokenStorageService,private service:CustomerService,private Custservice:CustomerAdminService) { 
    this.isLogged = this.token.isLogged;
    if(!this.isLogged)
    {
      //this.location.replaceState('/'); // clears browser history so they can't navigate with back button
      this.router.navigate(['login']);
    }
  }
 
  allCustomer !: Observable<UserDetails[]>;
  ngOnInit(): void {
    this.isLogged = this.token.isLogged;
    if(this.isLogged)
    {
      this.loadCustomers();
    }
    this.spinner.show();
  }
  loadCustomers(){
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      this.allCustomer = this.Custservice.GetAllAdminsCustomer();
    }, 1000);
    
    
  }

}
