import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { UserDetails } from '../models/user-details.model';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  Url !: string;
  header : any;
  constructor(private http : HttpClient) { 
    this.Url = "http://localhost:53724/";
	  const headerSettings: {[name: string]: string | string[]; } = {};
	  this.header = new HttpHeaders(headerSettings);
  }
  GetAllCustomers() : Observable<UserDetails[]>
  {
    return this.http.get<UserDetails[]>(this.Url + 'User/Api/UserModule/GetCustomers');
  }
  DeleteCustomer(ID:number)
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.Url + 'User/Api/UserModule/DeleteUser/' + ID,httpOptions);
  }
}
