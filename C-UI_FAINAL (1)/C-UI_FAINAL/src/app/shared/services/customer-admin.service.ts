import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { UserDetails } from '../models/user-details.model';
import { from, Observable } from 'rxjs';
import { Booking } from 'src/app/shared/models/booking';
import { CargoStatus } from '../models/cargo-status';
import { OfficeList } from '../models/office-list';
import { Quotation } from '../models/quotation';
@Injectable
({
  providedIn: 'root'
})
export class CustomerAdminService 
{
  Url !: string;
  header : any;
  constructor(private http : HttpClient) 
  {
    this.Url = "http://localhost:53724/";
	  const headerSettings: {[name: string]: string | string[]; } = {};
	  this.header = new HttpHeaders(headerSettings);
  }
  GetAllCustomer() : Observable<UserDetails[]>
  {
    return this.http.get<UserDetails[]>(this.Url + 'Admin/Api/GetCustomer/'+sessionStorage.getItem("UserId"));
  }
  GetAllAdminsCustomer() : Observable<UserDetails[]>
  {
    return this.http.get<UserDetails[]>(this.Url +'CustomerAdmin/Api/GetCustomer/'+sessionStorage.getItem("UserId"))
  }
  getDeliveredData() : Observable<Booking[]>{
    return this.http.get<Booking[]>(this.Url +'Admin/Api/Getdeliveredshipments');
  }
  getAdminsDeliveredData() : Observable<Booking[]>{
    return this.http.get<Booking[]>(this.Url + 'CustomerAdmin/Api/Getdeliveredshipments/' +sessionStorage.getItem("UserId"));
  }
  GetCargoStatus() : Observable<CargoStatus[]>{
    
    return this.http.get<CargoStatus[]>(this.Url + 'CustomerAdmin/Api/GetStatus');
  }
  GetAllOffice() : Observable<OfficeList[]>{
    
    return this.http.get<OfficeList[]>(this.Url + 'CUstomerAdmin/Api/GetOffice');
  }
  getBooking() :  Observable<Booking[]>
  {
    return this.http.get<Booking[]>(this.Url + 'Admin/Api/GetBooking');

  }
  GetQuotation() : Observable<Quotation[]>{
    return this.http.get<Quotation[]>(this.Url + 'Admin/Api/GetQuotationlist')
  }
  VerifyCustomer(ID:number) : Observable<number>
  {
    
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<number>(this.Url + 'Admin/Api/VerifyCustomer/' + ID,httpOptions);
  }
  GetMyShipments() : Observable<Booking[]>
  {
    return this.http.get<Booking[]>(this.Url + 'CustomerAdmin/Api/GetMyShipments/'+sessionStorage.getItem("UserId"));
  }
  GetMyOldShipments() : Observable<Booking[]>{
    return this.http.get<Booking[]>(this.Url + 'CustomerAdmin/Api/GetOldShipments/'+sessionStorage.getItem("UserId"))
  }
  GetCustomer(){
    return this.http.get<UserDetails[]>(this.Url +'Admin/Api/Getcustomer');
  }
  GetCustomerAdmin(){
    return this.http.get<UserDetails[]>(this.Url +'Admin/Api/Getcustomeradmin');
  }
  UpdateTracking(model:any)
  {
    return this.http.post<any[]>(this.Url + 'CustomerAdmin/Api/UpdateTracking/?sid=' + model.Status + '&bid=' + model.BookingId+ '&oid=' + model.Office+ '&uid=' +sessionStorage.getItem("UserId"),this.header);
  }
}
