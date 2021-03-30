import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from '../shared/services/login.service';
import {TokenStorageService} from '../_services/token-storage.service';
import { identifierModuleUrl } from '@angular/compiler';
import  Swal  from 'sweetalert2/dist/sweetalert2.js'; 
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  LoginForm: any;
  errorMessage!: string;
  userType !: number;
  userId !: number;
  
  submitted = false;
  constructor(private spinner: NgxSpinnerService,private formbulider: FormBuilder, private router:Router, private service:LoginService, private token: TokenStorageService) { 
    this.token.isLogged = false;
    sessionStorage.clear()
  }

  ngOnInit(): void {
    this.LoginForm = this.formbulider.group({
      Email: ['', [Validators.required]],
      Password: ['', [Validators.required]],
    });
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);

  }
  get loginControl(){
    return this.LoginForm.controls;
  }

  onFormSubmit()    
  {   
    this.spinner.show();
    this.submitted = true; 
    const login = this.LoginForm.value;  
     this.login(login);  
     this.spinner.hide();  
  }

  login(model:any)
  {
   
   this.service.Login(model).subscribe(
      response=>
      {
        
        this.userType = response as unknown as number;
        this.token.isLogged = true;
        this.token.saveSessionData(response);
        this.token.getTypeId().subscribe(
          res => {
           
            this.userType = res as unknown as number;
            if(this.userType == 1){
              
              
              this.router.navigate(['/admin-dashboard']);
             
              this.alertWithSuccess();
            }
            else if(this.userType == 2){
             
              this.alertWithSuccess();
              this.router.navigate(['/customer-admin-dashboard']);
            }
            else if(this.userType == 3){
              
              
              this.router.navigate(['/customer-dashboard']);
              
              this.alertWithSuccess();
            }
            this.LoginForm.reset();
          }
        )
        
        console.log( this.userType);
       
      }, err => {
        this.erroalert();
        this.errorMessage = err.error.message;
      });
  }
  alertWithSuccess(){  
    Swal.fire('Welcome...', 'You login succesfully!', 'success')  
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
}
