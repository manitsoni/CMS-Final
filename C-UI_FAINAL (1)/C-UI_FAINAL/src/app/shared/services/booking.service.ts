import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { PackageDetails } from 'src/app/shared/models/package-details';
import { Observable } from 'rxjs';
import {Booking} from '../models/booking';
import { OfficeList } from '../models/office-list';
@Injectable({
  providedIn: 'root'
})
export class BookingService {
  Url !:string;
  header : any;
  ShipmentId !: string;
  bookValues !: Booking;
  constructor(private http : HttpClient) {
    this.Url = "http://localhost:53724/";
	  const headerSettings: {[name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);
    //this.userid = sessionStorage.getItem("UserId");
  }
  GetPackageDetails(bookingId : string) : Observable<PackageDetails> {
    return this.http.get<PackageDetails>(this.Url + 'Customer/Api/UpdateBooking/' + bookingId);
  }
  GetMyOffice() : Observable<OfficeList[]>{
    return this.http.get<OfficeList[]>(this.Url + 'Customer/Api/GetMyOffice/'+sessionStorage.getItem("UserId"));
  }
  getDeliveredData() : Observable<Booking[]>{
    return this.http.get<Booking[]>(this.Url +'Customer/Api/Getoldbookings/'+sessionStorage.getItem("UserId"));
  }
  UpdateBooking(packageDetails:PackageDetails){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<PackageDetails[]>(this.Url + 'Customer/Api/UpdateById',packageDetails, httpOptions);
  }
  getBooking(){
    return this.http.get<Booking[]>(this.Url + 'Customer/Api/GetMyBooking/'+sessionStorage.getItem("UserId"));
  }
  getBookingDetails(ShipmentId : string){
   
    return this.http.get<Booking[]>(this.Url + 'Customer/Api/GetMyBookingDetails/?ShipmentId=' + ShipmentId + '&Userid=' + sessionStorage.getItem("UserId"));
  }
  BookCargo1(quote:Booking)
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }; 
    return this.http.post<Booking[]>(this.Url + 'Customer/Api/BookCargo/'+sessionStorage.getItem("UserId") , quote,  this.header);
  }
  GetRate(City1 : string,City2 : string)
  {
    return this.http.get<number>(this.Url + 'Customer/Api/GetKM/?City1=' + City1 + '&City2=' + City2);
  }
  SetFormValue(Book:Booking)
  {
    this.bookValues =  Book;
  }
  getFormValue()
  {
    return this.bookValues;
  }
}
