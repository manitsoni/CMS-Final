import { Component, OnInit } from '@angular/core';
import { QuotationManageService } from '../shared/services/quotation-manage.service';
import {Quotation} from '../shared/models/quotation'

@Component({
  selector: 'app-quotation-list',
  templateUrl: './quotation-list.component.html',
  styleUrls: ['./quotation-list.component.css']
})
export class QuotationListComponent implements OnInit {

  quotationDetails !: Quotation; 
  quot !: Quotation;
  constructor(private quotationManageService:QuotationManageService) { }

  ngOnInit(): void {
    this.QuotationDetails();
    this.quot = this.quotationDetails;
    debugger;
  }


  QuotationDetails(){
    this.quotationDetails =  this.quotationManageService.getFormValue();
    debugger;
    console.log(this.quotationDetails);
  }

}
