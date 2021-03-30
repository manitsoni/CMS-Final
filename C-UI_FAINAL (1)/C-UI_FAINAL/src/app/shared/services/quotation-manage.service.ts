import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Quotation } from '../models/quotation';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class QuotationManageService {
  [x: string]: any;
  Url !:string;
  header : any;
  quoteValues !: Quotation;
  constructor(private spinner : NgxSpinnerService,private http : HttpClient) {
    this.Url = "http://localhost:53724/";
	  const headerSettings: {[name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);
    //this.userid = sessionStorage.getItem("UserId");
  }
  GetQuotation(){
    return this.http.get<Quotation[]>(this.Url + 'Customer/Api/GetQuotation/'+sessionStorage.getItem("UserId"));
  }
  GetQuotationForAdmin(){
    return this.http.get<Quotation[]>(this.Url + 'Customer/Api/GetQuotation/'+sessionStorage.getItem("UserId"));
  }
  BookQuotation(quote:Quotation)
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }; 
    return this.http.post<Quotation[]>(this.Url + 'Customer/Api/BookQuotation/'+sessionStorage.getItem("UserId") , quote,  this.header);
  }
  GetRate(City1 : string,City2 : string)
  {
    return this.http.get<number>(this.Url + 'Customer/Api/GetQuotationRate/?City1=' + City1 + '&City2=' + City2);
  }
  SetFormValue(quote:Quotation)
  {
    this.quoteValues =  quote;
  }
 
  
  getFormValue(){
    return this.quoteValues;
  }

}
