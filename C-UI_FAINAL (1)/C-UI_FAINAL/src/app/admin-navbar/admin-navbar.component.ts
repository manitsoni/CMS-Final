import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
  isLogged = false;
  constructor(private router: Router,private token: TokenStorageService) { 
    this.isLogged = this.token.isLogged;
    if(!this.isLogged)
    {
      //this.location.replaceState('/'); // clears browser history so they can't navigate with back button
      this.router.navigate(['login']);
    }
  }
  ngOnInit(): void {
  }

}
