import { Injectable } from '@angular/core';
import { QuotationManageService } from './quotation-manage.service';

@Injectable({
  providedIn: 'root'
})
export class QuotationListService {

  constructor(private quotationManageService : QuotationManageService) { }

 
}
