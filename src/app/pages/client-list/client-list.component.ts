import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
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
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { MatIcon } from '@angular/material/icon';
import { CoreModule } from '../../core/core.module';
import { Validators, FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CompanyService } from '../../core/services/company.service';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [MatCardModule,
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
    MatPaginatorModule
  ],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss'
})
export class ClientListComponent implements OnInit {

  displayedColumns: string[] = ['#', 'Name', 'businesstype', 'Manager', 'Designer', 'post', 'reel', 'story', 'extra', 'media', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<any>([]);

  isToggled = false;
  hide = true;
  authForm: FormGroup;
  isOpen: boolean = false;

  roleWiseData: any = [];
  clientsData: any = [];
  comapanyRole: any = localStorage.getItem('Role');
  designerlist: any = [];
  managerlist: any = []

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public themeService: CustomizerSettingsService,
    private companyService: CompanyService
  ) {
    this.getStaffDetails();
    this.getClientsDetails();
  }

  ngOnInit(): void {
    this.authForm = this.fb.group({
      name: ['', Validators.required],
      business: ['', Validators.required],
      post: ['', Validators.required],
      story: ['', Validators.required],
      reels: ['', Validators.required],
      extra: ['', Validators.required],
      fb: ['', Validators.required],
      tw: ['', Validators.required],
      ld: ['', Validators.required],
      yt: ['', Validators.required],
      in: ['', Validators.required,],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
    this.themeService.isToggled$.subscribe(isToggled => {
      this.isToggled = isToggled;
    });
  }
  getStaffDetails() {
    this.companyService.getAllEmployeeDetailsData().subscribe((res: any) => {
      this.designerlist = res.filter((employee: any) => employee.role === 'Designer');
      this.managerlist = res.filter((employee: any) => employee.role === 'Manager');
    })
  }
  openAddClients() {
    this.isOpen = true;
    // this.isUpdate = false;
    // this.clientModel = {};
    // this.validationForm.markAsUntouched();
    // this.clientlogo = null;
    // this.imageUrl = 'assets/images/file-upload-image.jpg';
  }
  BackToTable() {
    this.isOpen = false;
    // this.isUpdate = false;
    // this.validationForm.markAsUntouched();
    this.getClientsDetails();
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
          res[index].assignedDesigners = data.filter((employee: any) => employee.role === 'Designer');
          res[index].assignedManagers = data.filter((employee: any) => employee.role === 'Manager');
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
    this.dataSource.data = dataToProcess;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  // Search Filter
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getRemainingDesignersTooltip(designers: any) {
    return designers.map((designer: any) => designer.name).join(', ');
  }
  getRemainingManagersTooltip(managers: any) {
    return managers.map((manager: any) => manager.name).join(', ');
  }
  onSubmit() {
    if (this.authForm.valid) {
      this.router.navigate(['/']);
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }
}