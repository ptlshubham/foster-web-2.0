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
    AuthGuard
  ]
})
export class CoreModule { }
