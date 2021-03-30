import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetails } from '../shared/models/user-details.model';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  Url !:string;
  header : any;
  constructor(private http : HttpClient) {
    this.Url = "http://localhost:53724/";
	  const headerSettings: {[name: string]: string | string[]; } = {};
	  this.header = new HttpHeaders(headerSettings);
  }
  
  isLogged = false;
  userId! : number;
  signOut() :void{
    window.sessionStorage.clear();
  }
  saveSessionData(id: any){
    sessionStorage.setItem("UserId",id);
    console.log(this.getTypeId());
    this.isLogged = true;
  }
  saveDatainSession(user : any){
    alert(user)
    console.log(user.Email)
    sessionStorage.setItem("Email",user.Email);
  }
  getMyInfo()
  {
    return this.http.get<any[]>(this.Url + 'User/Api/UserModule/GetMyInfo/'+sessionStorage.getItem("UserId"));
  }
  getTypeId()
  {
    debugger;
    return this.http.get<any[]>(this.Url + 'User/Api/UserModule/GetTypeId/'+sessionStorage.getItem("UserId"),this.header);
  }
  
}
