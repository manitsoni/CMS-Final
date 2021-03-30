import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { OfficeDetails } from '../models/office-details';
import {UserRegistrationService} from './user-registration.service'

@Injectable({
  providedIn: 'root'
})
export class OfficeRegService {
  Url !:string;  
  //token : string;  
  header : any;  
  constructor(private http : HttpClient, private userRegistrationService : UserRegistrationService) {   
  
    this.Url = 'http://localhost:53724/';  
  
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
  }  
  /*Login(model : any){  
    debugger;  
     var a =this.Url+'UserLogin';  
   return this.http.post<any>(this.Url+'UserLogin',model,{ headers: this.header});  
  } */ 

  // Office Registration code
  OfficeRegister(register:OfficeDetails)  
   {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }; 
    console.log(this.Url + 'User/Api/UserModule/OfficeRegister');
    return this.http.post<OfficeDetails[]>(this.Url + 'User/Api/UserModule/OfficeRegister?_userType=CustomerAdmin', register, httpOptions)  
   }  

   
}
