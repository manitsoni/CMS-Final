import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyRegistrationComponent } from './company-registration/company-registration.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { OfficeRegistrationComponent } from './office-registration/office-registration.component';
import { LoginComponent } from './login/login.component';

import { CustomerDashboardComponent } from './Dashboard/customer-dashboard/customer-dashboard.component';
import { AdminDashboardComponent } from './Dashboard/admin-dashboard/admin-dashboard.component';
import { CustomerAdminDashboardComponent } from './Dashboard/customer-admin-dashboard/customer-admin-dashboard.component';

import { BookingComponent } from './booking/booking.component';
import { ManageQuotationComponent } from './manage-quotation/manage-quotation.component';
import { EditCustomersComponent } from './edit-customers/edit-customers.component';

import {SuccessfullPageComponent} from './successfull-page/successfull-page.component'
import { GetQuotationComponent } from './get-quotation/get-quotation.component';
import { GetBookingComponent } from './booking/get-booking/get-booking.component';
import { GetBookingDetailsComponent } from './booking/get-booking-details/get-booking-details.component';
import { GetMyOrdersComponent } from './Dashboard/customer-admin-dashboard/get-my-orders/get-my-orders.component';
import { GetCustomerComponent } from './Dashboard/admin-dashboard/get-customer/get-customer.component';
import { GetCustomerAdminComponent } from './Dashboard/admin-dashboard/get-customer-admin/get-customer-admin.component';
import { GetAllBookingsComponent } from './Dashboard/admin-dashboard/get-all-bookings/get-all-bookings.component';
import { GetQuotationDetailsComponent } from './Dashboard/admin-dashboard/get-quotation-details/get-quotation-details.component';
import { GetAllBookingDetailsComponent } from './Dashboard/admin-dashboard/get-all-booking-details/get-all-booking-details.component';
import { GetMyCustomerComponent } from './Dashboard/customer-admin-dashboard/get-my-customer/get-my-customer.component';
import { GetMyOldOrdersComponent } from './Dashboard/customer-admin-dashboard/get-my-old-orders/get-my-old-orders.component';
import { GetDeliveredShipmentsComponent } from './Dashboard/admin-dashboard/get-delivered-shipments/get-delivered-shipments.component';
import { GetAdminsDeliveredShipmentsComponent } from './Dashboard/customer-admin-dashboard/get-admins-delivered-shipments/get-admins-delivered-shipments.component';
import { UpdateBookingComponent } from './booking/update-booking/update-booking.component';
import { GetDeliveredBookingsComponent } from './Dashboard/customer-dashboard/get-delivered-bookings/get-delivered-bookings.component';
import { GetCustomersQuotationComponent } from './Dashboard/customer-admin-dashboard/get-customers-quotation/get-customers-quotation.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { CustomerAdminNavbarComponent } from './customer-admin-navbar/customer-admin-navbar.component';
import { CustomerNavbarComponent } from './customer-navbar/customer-navbar.component';

//import {QuotationListComponent} from './quotation-list/quotation-list.component'

const routes: Routes = [
  {    
    path: '',    
    redirectTo: 'login',    
    pathMatch: 'full',    
  },    
  {    
    path: 'user-registration',    
    component: UserRegistrationComponent,       
  },
  {    
    path: 'office-registration',    
    component: OfficeRegistrationComponent,       
  },
  {    
    path: 'company-registration',    
    component: CompanyRegistrationComponent,       
  },
  {    
    path: 'login',    
    component: LoginComponent,       
  },
  {    
    path: 'booking',    
    component: BookingComponent,       
  },
  {    
    path: 'customer-dashboard',    
    component: CustomerDashboardComponent,       
  },
  {    
    path: 'admin-dashboard',    
    component: AdminDashboardComponent,       
  },
  {    
    path: 'customer-admin-dashboard',    
    component: CustomerAdminDashboardComponent,       
  },
  {    
    path: 'get-quotation',    
    component: GetQuotationComponent,       
  },
  {    
    path: 'quotation',    
    component: ManageQuotationComponent,       
  },
  {    
    path: 'success',    
    component: SuccessfullPageComponent
  },
  {       
    path: 'get-booking',    
    component: GetBookingComponent,       
  },
  
  {       
    path: 'get-booking-details/:id',    
    component: GetBookingDetailsComponent,       
  },
  
  {       
    path: 'get-my-orders',    
    component: GetMyOrdersComponent,       
  },
  {
    path :'get-customer',
    component : GetCustomerComponent
  },{
    path:'get-customer-admin',
    component : GetCustomerAdminComponent
  },{
    path:'get-all-bookings',
    component : GetAllBookingsComponent
  },{
    path:'get-quotation-details',
    component : GetQuotationDetailsComponent
  },{
    path:'get-all-booking-details/:id',
    component : GetAllBookingDetailsComponent
  },{
    path :'get-my-customer',
    component  : GetMyCustomerComponent
  },{
    path :'get-delivered-shipments',
    component : GetDeliveredShipmentsComponent
  },
  {
    path :'get-admins-delivered-shipments',
    component : GetAdminsDeliveredShipmentsComponent
  },{
    path :'update-booking/:id',
    component : UpdateBookingComponent
  },{
    path : 'get-delivered-bookings',
    component : GetDeliveredBookingsComponent
  },
    {
      path : 'get-customers-quotation',
      component : GetCustomersQuotationComponent
    },{
      path :'admin-navbar',
      component : AdminNavbarComponent
    },{
      path : 'customer-admin-navbar',
      component : CustomerAdminNavbarComponent
    },{
      path : 'customer-navbar',
      component : CustomerNavbarComponent
    },{
      path : 'get-my-old-orders',
      component : GetMyOldOrdersComponent
    },
    { 
      path: '**',
      redirectTo: '/login', 
    }
 



  // {path: 'Registration/CompanyRegistration',component:CompanyRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
