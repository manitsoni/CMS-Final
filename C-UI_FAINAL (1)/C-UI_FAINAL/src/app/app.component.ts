import { Component } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  title = 'Cargovio-UI';
  isLoggedin = false;
  
  username!: string;
  constructor(private spinner: NgxSpinnerService,private tokenStorageService: TokenStorageService){
  }
  ngOnInit(): void {
    this.isLoggedin = this.tokenStorageService.isLogged;
  if (this.isLoggedin) {
      this.username = 'manit';

    }
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
    
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
