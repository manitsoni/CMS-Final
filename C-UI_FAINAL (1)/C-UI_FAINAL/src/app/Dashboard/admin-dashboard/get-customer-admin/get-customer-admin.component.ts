import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import {Router} from '@angular/router';
import  Swal  from 'sweetalert2/dist/sweetalert2.js'; 
import { Observable } from 'rxjs';
import { UserDetails } from 'src/app/shared/models/user-details.model';
import { CustomerAdminService } from 'src/app/shared/services/customer-admin.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-get-customer-admin',
  templateUrl: './get-customer-admin.component.html',
  styleUrls: ['./get-customer-admin.component.css']
})
export class GetCustomerAdminComponent implements OnInit {
  allCustomerAdmin !: Observable<UserDetails[]>;
  isLogged = false;
  filter!:string;
  p!:number;
  dataSource = this.allCustomerAdmin;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor(private spinner : NgxSpinnerService,private router:Router,private token: TokenStorageService,private service:CustomerAdminService) 
  { 
    this.isLogged = this.token.isLogged;
    if(!this.isLogged)
    {
      //this.location.replaceState('/'); // clears browser history so they can't navigate with back button
      this.router.navigate(['login']);
    }
    
  }
 
  ngOnInit(): void {
    this.isLogged = this.token.isLogged;
    if(!this.isLogged)
    {
      //this.location.replaceState('/'); // clears browser history so they can't navigate with back button
      this.router.navigate(['login']);
    }
    this.spinner.show();
    //dataSource = new MatTableDataSource<Booking>(this.allCustomerAdmin);
    this.GetCustomerAdmin();
    //this.dataSource.paginator = this.paginator;
  }
  GetCustomerAdmin(){
    setTimeout(() => {
      this.allCustomerAdmin = this.service.GetCustomerAdmin();
      this.spinner.hide();
    }, 1000);
   
  }

}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];