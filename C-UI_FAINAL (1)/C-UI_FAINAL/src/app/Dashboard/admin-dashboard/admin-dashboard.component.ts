import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import {Router} from '@angular/router';
import  Swal  from 'sweetalert2/dist/sweetalert2.js'; 
import { Observable } from 'rxjs';
import { UserDetails } from '../../shared/models/user-details.model';
import { CustomerAdminService } from '../../shared/services/customer-admin.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  isLogged = false;
  allCustomerAdmins !: Observable<UserDetails[]>;
  //myInfo !:Observable<UserDetails[]>;
  email !: string | null;
  constructor(private spinner : NgxSpinnerService,private router:Router,private token: TokenStorageService,private service:CustomerAdminService) {
    this.isLogged = this.token.isLogged;
    if(!this.isLogged)
    {
      //this.location.replaceState('/'); // clears browser history so they can't navigate with back button
      this.router.navigate(['login']);
    }
   
   }
 

  ngOnInit(): void {
    this.isLogged = this.token.isLogged;
    if(this.isLogged)
    {
      
    }
    this.spinner.show();
    this.getMyInfo();
    //this.token.saveDatainSession(myInfo);
    this.email = sessionStorage.getItem("Email");
    
  }
  getMyInfo(){
    setTimeout(() => {
      this.token.getMyInfo().subscribe(data =>{
        const myInfo = data;
        console.log(myInfo);
        this.token.saveDatainSession(myInfo);
      })
      this.spinner.hide();
    }, 1000);
    
  }
  
}
