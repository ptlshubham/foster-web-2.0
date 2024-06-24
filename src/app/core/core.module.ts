import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { CompanyService } from './services/company.service';
import { EventService } from './services/event.service';
import { HomeService } from './services/home.services';
import { OrganizationService } from './services/organization.service';
import { TokensService } from './services/tokens.service';
import { AuthInterceptor } from './guards/auth-http-interceptor';
import { AuthGuard } from './guards/auth.guard';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { AppDateAdapter, MY_DATE_FORMATS } from './services/date-formats';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    ApiService,
    CompanyService,
    EventService,
    HomeService,
    OrganizationService,
    TokensService,
    AuthInterceptor,
    AuthGuard,
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class CoreModule { }
