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
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterLink } from '@angular/router';
import { CoreModule } from '../../../core/core.module';
import { MatIconModule } from '@angular/material/icon';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { MatPaginator } from '@angular/material/paginator';
import { CompanyService } from '../../../core/services/company.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-designer-sheet',
  standalone: true,
  imports: [MatCardModule,
    MatMenuModule,
    MatButtonModule,
    RouterLink,
    MatTableModule,
    CommonModule,
    CoreModule,
    MatIconModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule, 
    MatSelectModule, 
    MatDatepickerModule, 
    HttpClientModule,
    MatNativeDateModule],
  templateUrl: './designer-sheet.component.html',
  styleUrl: './designer-sheet.component.scss'
})
export class DesignerSheetComponent {

  displayedColumns: string[] = ['#', 'profile' , 'Name', 'clientname' , 'totalclients'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<any>([]);

  clientsData: any = [];
  roleWiseData: any = [];
  comapanyRole: any = localStorage.getItem('Role');
  loading: boolean = true; // Initialize as true to show loader initially


constructor(
  public themeService: CustomizerSettingsService,
  private router: Router,
  private companyService: CompanyService

){
  this.getClientsDetails();

}
  redirectToclientlist(): void {
    this.router.navigate(['/client-list']);
  }

  getClientsDetails() {
    this.companyService.getAllClientDetailsData().subscribe((res: any) => {
      let pendingRequests = res.length;

      if (pendingRequests === 0) {
        this.clientsData = res;
        this.getEmployeeWiseData();
        return;
      }
      res.forEach((element: any, index: number) => {
        const mediaArray = element.media.split(',').map((item: any) => item.trim());
        res[index].mediaArray = mediaArray;

        this.companyService.getAssignedEmpDetailsById(element.id).subscribe((data: any) => {
          pendingRequests--;

          if (pendingRequests === 0) {
            this.clientsData = res;
            this.getEmployeeWiseData();
          }
        });
      });
    });
  }

  getEmployeeWiseData() {
    const eid = Number(localStorage.getItem('Eid')); // Convert eid to a number
    this.roleWiseData = []; // Initialize or clear the roleWiseData array

    // Helper function to filter clients by assigned roles
    const filterByRole = (roleKey: string) => {
      this.clientsData.forEach((element: any) => {
        element[roleKey].forEach((assigned: any) => {
          if (assigned.empid === eid) {
            this.roleWiseData.push(element);
          }
        });
      });
    };

    // Determine the role and filter accordingly
    if (this.comapanyRole === 'Designer') {
      filterByRole('assignedDesigners');
    } else if (this.comapanyRole === 'Manager' || this.comapanyRole === 'SubAdmin') {
      filterByRole('assignedManagers');
    }

    // Assign index to each element and set collection size
    const dataToProcess = this.roleWiseData.length ? this.roleWiseData : this.clientsData;
    dataToProcess.forEach((element: any, index: number) => {
      element.index = index + 1;
    });
  
    setTimeout(() => {
      // Replace this with actual data fetching logic
      this.dataSource.data = dataToProcess;
      this.loading = false; // Set loading to false once data is fetched
    }, 2000);
  }
}
