import { CommonModule, NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterLink } from '@angular/router';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CoreModule } from '../../core/core.module';
import { CompanyService } from '../../core/services/company.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    RouterLink,
    MatTableModule,
    CommonModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIcon,
    ReactiveFormsModule,
    CoreModule,
    HttpClientModule,
    MatPaginatorModule,
    MatProgressSpinnerModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {
  displayedColumns: string[] = ['#', 'Name', 'clientname', 'totalclients'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<any>([]);

  staffData: any = [];
  staffDataTable: any = [];
  roleWiseData: any = [];
  companyRole: any = localStorage.getItem('Role');
  filterEmployeeList: any = [];
  loading: boolean = true;

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
      this.dataSource.data = [...this.staffDataTable];
      debugger;
    })
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

  redirectToAddEmployee(): void {
    this.router.navigate(['/employee-list/add-employee'])
  }
}
