import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-edit-customers',
  templateUrl: './edit-customers.component.html',
  styleUrls: ['./edit-customers.component.css']
})
export class EditCustomersComponent implements OnInit {
  Form: any;
  data: boolean | undefined;
  massage: string | undefined;
  isLogged = false;

  constructor(private formbuilder: FormBuilder, private router: Router,private token: TokenStorageService) { 
    this.isLogged = this.token.isLogged;
    if(!this.isLogged)
    {
      //this.location.replaceState('/'); // clears browser history so they can't navigate with back button
      this.router.navigate(['login']);
    }
  }

  ngOnInit(): void {
    this.isLogged = this.token.isLogged;
    this.Form = this.formbuilder.group({
      UserName: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Password: ['', [Validators.required]],
      ContactNo: ['', [Validators.required]],
      Addressline1: ['', [Validators.required]],
      Addressline2: ['', [Validators.required]],
      City: ['', [Validators.required]],
      State: ['', [Validators.required]],
      Country: ['', [Validators.required]],
      Pincode: ['', [Validators.required]],
      Role: ['', [Validators.required]],
  });
  }
  
  
  onFormSubmit() {
    const formValue = this.Form.value;
    console.log(formValue);
    debugger;

    
    this.data = true;
          this.massage = 'Data saved Successfully';    
          this.Form.reset();
    // this.data = true;
    //       this.massage = 'Data saved Successfully';    
    //       this.Form.reset();
  }
  
  successNotification(){
    Swal.fire('Your Data changes Done', 'Thank you', 'success')
  }
    
}
