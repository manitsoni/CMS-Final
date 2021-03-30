import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  Url !:string;
  header : any;
  constructor(private http : HttpClient) {
    this.Url = "http://localhost:53724/";
	  const headerSettings: {[name: string]: string | string[]; } = {};
	  this.header = new HttpHeaders(headerSettings);
  }

  Login(model:any)
  {
    return this.http.post<any[]>(this.Url + 'User/Api/UserModule/Login/?Email=' + model.Email + '&Password=' + model.Password,this.header);
  }
 
}
