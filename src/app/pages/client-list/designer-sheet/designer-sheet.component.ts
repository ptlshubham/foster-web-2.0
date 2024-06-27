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

  displayedColumns: string[] = ['#', 'Name', 'clientname', 'totalclients'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<any>([]);

  comapanyRole: any = localStorage.getItem('Role');
  loading: boolean = true; // Initialize as true to show loader initially


  constructor(
    public themeService: CustomizerSettingsService,
    private router: Router,
    private companyService: CompanyService

  ) {
    this.getClientsDetailsForSheet();

  }
  redirectToclientlist(): void {
    this.router.navigate(['/client-list']);
  }
  getClientsDetailsForSheet() {
    this.companyService.getAllDesignerSheetList().subscribe((data: any) => {
      data.forEach((row: any, index: number) => {
        row.index = index + 1;
        row.clients = row.clientnames.split(',').map((client: string) => client.trim());
      });
      setTimeout(() => {
        // Replace this with actual data fetching logic
        this.dataSource.data = data;
        debugger
        this.loading = false; // Set loading to false once data is fetched
      }, 2000);
    });
  }
}
