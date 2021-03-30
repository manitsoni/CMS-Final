import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {UserRegistrationService} from './shared/services/user-registration.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyRegistrationComponent } from './company-registration/company-registration.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { OfficeRegistrationComponent } from './office-registration/office-registration.component';
import { AdminDashboardComponent } from './Dashboard/admin-dashboard/admin-dashboard.component';
import { CustomerAdminDashboardComponent } from './Dashboard/customer-admin-dashboard/customer-admin-dashboard.component';
import { CustomerDashboardComponent } from './Dashboard/customer-dashboard/customer-dashboard.component';
import { LoginComponent } from './login/login.component';
import { ManageQuotationComponent } from './manage-quotation/manage-quotation.component';
import { BookingComponent } from './booking/booking.component';

import { SuccessfullPageComponent } from './successfull-page/successfull-page.component';

import { EditCustomersComponent } from './edit-customers/edit-customers.component';

import { GetQuotationComponent } from './get-quotation/get-quotation.component';

import { QuotationManageService } from './shared/services/quotation-manage.service';
import { GetBookingComponent } from './booking/get-booking/get-booking.component';
import { UpdateBookingComponent } from './booking/update-booking/update-booking.component';
import { GetBookingDetailsComponent } from './booking/get-booking-details/get-booking-details.component';
import { GetMyOrdersComponent } from './Dashboard/customer-admin-dashboard/get-my-orders/get-my-orders.component';
import { QuotationListComponent } from './quotation-list/quotation-list.component';
import { GetCustomerComponent } from './Dashboard/admin-dashboard/get-customer/get-customer.component';
import { GetCustomerAdminComponent } from './Dashboard/admin-dashboard/get-customer-admin/get-customer-admin.component';
import { GetAllBookingsComponent } from './Dashboard/admin-dashboard/get-all-bookings/get-all-bookings.component';
import { GetAllBookingDetailsComponent } from './Dashboard/admin-dashboard/get-all-booking-details/get-all-booking-details.component';
import { GetQuotationDetailsComponent } from './Dashboard/admin-dashboard/get-quotation-details/get-quotation-details.component';
import { GetMyCustomerComponent } from './Dashboard/customer-admin-dashboard/get-my-customer/get-my-customer.component';
import { GetMyOldOrdersComponent } from './Dashboard/customer-admin-dashboard/get-my-old-orders/get-my-old-orders.component';
import { GetDeliveredShipmentsComponent } from './Dashboard/admin-dashboard/get-delivered-shipments/get-delivered-shipments.component';
import { GetAdminsDeliveredShipmentsComponent } from './Dashboard/customer-admin-dashboard/get-admins-delivered-shipments/get-admins-delivered-shipments.component';
import { GetDeliveredBookingsComponent } from './Dashboard/customer-dashboard/get-delivered-bookings/get-delivered-bookings.component';
import { GetCustomersQuotationComponent } from './Dashboard/customer-admin-dashboard/get-customers-quotation/get-customers-quotation.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { CustomerAdminNavbarComponent } from './customer-admin-navbar/customer-admin-navbar.component';
import { CustomerNavbarComponent } from './customer-navbar/customer-navbar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { NgxSpinnerModule } from "ngx-spinner";
import {NgxPaginationModule} from 'ngx-pagination';  
import { Ng2SearchPipeModule } from 'ng2-search-filter';  

@NgModule({
  declarations: [
    AppComponent,
    CompanyRegistrationComponent,
    UserRegistrationComponent,
    OfficeRegistrationComponent,
    AdminDashboardComponent,
    CustomerAdminDashboardComponent,
    CustomerDashboardComponent,
    LoginComponent,
    ManageQuotationComponent,
    BookingComponent,
 
    SuccessfullPageComponent,

    SuccessfullPageComponent,
    EditCustomersComponent,
    GetQuotationComponent,

    QuotationListComponent,

    GetBookingComponent,

    UpdateBookingComponent,

    GetBookingDetailsComponent,

    GetMyOrdersComponent,

    GetCustomerComponent,

    GetCustomerAdminComponent,

    GetAllBookingsComponent,

    GetAllBookingDetailsComponent,

    GetQuotationDetailsComponent,

    GetMyCustomerComponent,

    GetMyOldOrdersComponent,

    GetDeliveredShipmentsComponent,

    GetAdminsDeliveredShipmentsComponent,

    GetDeliveredBookingsComponent,

    GetCustomersQuotationComponent,

    AdminNavbarComponent,

    CustomerAdminNavbarComponent,

    CustomerNavbarComponent,
    AdminNavbarComponent,
    CustomerAdminNavbarComponent,
    GetMyOldOrdersComponent,
    SpinnerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgxPaginationModule,Ng2SearchPipeModule
  ],
  providers: [UserRegistrationService,QuotationManageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
