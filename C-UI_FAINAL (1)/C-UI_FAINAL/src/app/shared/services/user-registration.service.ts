import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; 
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {UserDetails} from '../models/user-details.model'
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const baseURL = "http://localhost:53724/User/Api/UserModule/Registration?_userType="

// Get Country-state-city-pincode

//const apibaseurl = "'http://api.postalpincode.in/pincode' + pincode"
// url ="http://api.postalpincode.in/pincode/382130"

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  
  
  id !: number;
  UserRegistrationDetails !: UserDetails;
  constructor(private httpClient: HttpClient, private router:Router) { }




  addUser(data: UserDetails, role: string): Observable<any> {
    debugger;
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.httpClient.post(baseURL+role , data, httpOptions);
  }
  setUserId(res : number)
  {
    this.id = res;
  }
  getUserId()
  {
    return this.id;
  }

  
}
