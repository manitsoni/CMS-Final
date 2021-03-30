import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import {Router} from '@angular/router';
import  Swal  from 'sweetalert2/dist/sweetalert2.js'; 
import { Observable } from 'rxjs';
import { UserDetails } from 'src/app/shared/models/user-details.model';
import { CustomerAdminService } from 'src/app/shared/services/customer-admin.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-get-customer',
  templateUrl: './get-customer.component.html',
  styleUrls: ['./get-customer.component.css']
})
export class GetCustomerComponent implements OnInit {
  allCustomer !: Observable<UserDetails[]>;
  isLogged = false;
  filter!:string;
  p!:number;
  constructor(private spinner : NgxSpinnerService,private router:Router,private token: TokenStorageService,private service:CustomerAdminService) 
  { 
    this.isLogged = this.token.isLogged;
    if(!this.isLogged)
    {
      //this.location.replaceState('/'); // clears browser history so they can't navigate with back button
      this.router.navigate(['login']);
    }
  }
  ngOnInit(): void {
    this.isLogged = this.token.isLogged;
    if(!this.isLogged)
    {
      //this.location.replaceState('/'); // clears browser history so they can't navigate with back button
      this.router.navigate(['login']);
    }
    this.spinner.show();
    this.GetCustomer();
  }
  GetCustomer(){
    setTimeout(() => {
      this.allCustomer = this.service.GetCustomer();
      this.spinner.hide();
    }, 1000);
    
  }

}
