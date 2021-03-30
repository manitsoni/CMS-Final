import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {CompanyDetails} from '../models/company-details';

@Injectable({
  providedIn: 'root'
})
export class CompanyRegisService {
  Url !: string;
  header: any;
  constructor(private http:HttpClient) { 
    this.Url = 'http://localhost:53724/';
    const headerSettings: {[name: string]: string | string[]; } = {};
	  this.header = new HttpHeaders(headerSettings);
  }

  RegisterCompany(company:CompanyDetails)
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<CompanyDetails[]>(this.Url + 'User/Api/UserModule/CompanyRegister?_userType=Customer', company, httpOptions);
  }
}
