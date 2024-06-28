import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CompanyService } from '../../core/services/company.service';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { CoreModule } from '../../core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatTooltipModule, MatIconModule,CoreModule,HttpClientModule,CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {
  staffData: any = [];
  staffDataTable: any = [];
  collectionSize = 0;
  filterEmployeeList: any = [];
  paginateData: any = [];
  page = 1;
  pageSize = 50;

  constructor(
    private router: Router,
    public themeService: CustomizerSettingsService,
    private companyService: CompanyService
  ) {
    this.themeService.isToggled$.subscribe(isToggled => {
      this.isToggled = isToggled;
    });
    this.getStaffDetails();
  }

  getStaffDetails() {
    this.companyService.getEmployeeDetailsData().subscribe((res: any) => {
      this.staffDataTable = res.filter((staff: any) => staff.role !== 'companyAdmin');
      for (let i = 0; i < this.staffDataTable.length; i++) {
        this.staffDataTable[i].index = i + 1;
      }
      this.collectionSize = this.staffDataTable.length;
      this.filterEmployeeList = [...this.staffDataTable];
      this.getPagintaion();
    })
  }
  getPagintaion() {
    this.paginateData = this.filterEmployeeList.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  // isToggled
  isToggled = false;

  // Dark Mode
  toggleTheme() {
    this.themeService.toggleTheme();
  }

  // RTL Mode
  toggleRTLEnabledTheme() {
    this.themeService.toggleRTLEnabledTheme();
  }

  redirectToAddEmployee() : void{
    this.router.navigate(['/employee-list/add-employee'])
  }
  toppings = new FormControl('');
}
