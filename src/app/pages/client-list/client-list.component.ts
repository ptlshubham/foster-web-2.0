import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
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

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [MatCardModule,
    MatMenuModule,
    MatButtonModule,
    RouterLink,
    MatTableModule,
    CommonModule,
    CoreModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIcon,
    ReactiveFormsModule],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss'
})
export class ClientListComponent {

  displayedColumns: string[] = ['taskID', 'Name', 'businesstpye', 'Designer', 'Manager', 'post', 'Reel',  'Story' , 'Extra' , 'Media', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);


  // Search Filter
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }




  // Popup Trigger
  classApplied = false;
  toggleClass() {
    this.classApplied = !this.classApplied;
  }

  // isToggled
  isToggled = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public themeService: CustomizerSettingsService
  ) {
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

   // Password Hide
   hide = true;

   // Form
   authForm: FormGroup;
   onSubmit() {
       if (this.authForm.valid) {
           this.router.navigate(['/']);
       } else {
           console.log('Form is invalid. Please check the fields.');
       }
   }
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    taskID: '#951',
    Name: 'Hotel management system',
    businesstpye: 'Shawn Kennedy',
    Manager: 'Shawn',
    Designer: 'Shawn',
    post: '15 ',
    Reel: '10',
    Story: '10',
    Extra: '10',
    Media: {
      inProgress: 'In Progress',
      // pending: 'Pending',
      // completed: 'Completed',
      // notStarted: 'Not Started',
    },
    action: {
      view: 'visibility',
      delete: 'delete'
    }
  },
  {
    taskID: '#587',
    Name: 'Send proposal to APR Ltd',
    businesstpye: 'Roberto Cruz',
    Manager: 'Shawn',
    Designer: 'Shawn',
    post: '14 ',
    Reel: '10',
    Story: '10',
    Extra: '10',
    Media: {
      // inProgress: 'In Progress',
      pending: 'Pending',
      // completed: 'Completed',
      // notStarted: 'Not Started',
    },
    action: {
      view: 'visibility',
      delete: 'delete'
    }
  },
  {
    taskID: '#618',
    Name: 'Python upgrade',
    businesstpye: 'Juli Johnson',
    Manager: 'Shawn',
    Designer: 'Shawn',
    post: '13 ',
    Reel: '10',
    Story: '10',
    Extra: '10',
    Media: {
      // inProgress: 'In Progress',
      // pending: 'Pending',
      completed: 'Completed',
      // notStarted: 'Not Started',
    },
    action: {
      view: 'visibility',
      delete: 'delete'
    }
  },
  {
    taskID: '#367',
    Name: 'Schedule meeting with Daxa',
    businesstpye: 'Catalina Engles',
    Manager: 'Shawn',
    Designer: 'Shawn',
    post: '12 ',
    Reel: '10',
    Story: '10',
    Extra: '10',
    Media: {
      // inProgress: 'In Progress',
      // pending: 'Pending',
      // completed: 'Completed',
      notStarted: 'Not Started',
    },
    action: {
      view: 'visibility',
      delete: 'delete'
    }
  },
  {
    taskID: '#761',
    Name: 'Engineering lite touch',
    businesstpye: 'Louis Nagle',
    Manager: 'Shawn',
    Designer: 'Shawn',
    post: '11 ',
    Reel: '10',
    Story: '10',
    Extra: '10',
    Media: {
      inProgress: 'In Progress',
      // pending: 'Pending',
      // completed: 'Completed',
      // notStarted: 'Not Started',
    },
    action: {
      view: 'visibility',
      delete: 'delete'
    }
  },
  {
    taskID: '#431',
    Name: 'Refund bill payment',
    businesstpye: 'Michael Marquez',
    Manager: 'Shawn',
    Designer: 'Shawn',
    post: '10 ',
    Reel: '10',
    Story: '10',
    Extra: '10',
    Media: {
      // inProgress: 'In Progress',
      // pending: 'Pending',
      // completed: 'Completed',
      notStarted: 'Not Started',
    },
    action: {
      view: 'visibility',
      delete: 'delete'
    }
  },
  {
    taskID: '#421',
    Name: 'Public beta release',
    businesstpye: 'James Andy',
    Manager: 'Shawn',
    Designer: 'Shawn',
    post: '09 ',
    Reel: '10',
    Story: '10',
    Extra: '10',
    Media: {
      inProgress: 'In Progress',
      // pending: 'Pending',
      // completed: 'Completed',
      // notStarted: 'Not Started',
    },
    action: {
      view: 'visibility',
      delete: 'delete'
    }
  },
  {
    taskID: '#624',
    Name: 'Fix platform errors',
    businesstpye: 'Alina Smith',
    Manager: 'Shawn',
    Designer: 'Shawn',
    post: '08 ',
    Reel: '10',
    Story: '10',
    Extra: '10',
    Media: {
      // inProgress: 'In Progress',
      // pending: 'Pending',
      completed: 'Completed',
      // notStarted: 'Not Started',
    },
    action: {
      view: 'visibility',
      delete: 'delete'
    }
  },
  {
    taskID: '#513',
    Name: 'Launch our mobile app',
    businesstpye: 'David Warner',
    Manager: 'Shawn',
    Designer: 'Shawn',
    post: '07',
    Reel: '10',
    Story: '10',
    Extra: '10',
    Media: {
      // inProgress: 'In Progress',
      pending: 'Pending',
      // completed: 'Completed',
      // notStarted: 'Not Started',
    },
    action: {
      view: 'visibility',
      delete: 'delete'
    }
  }
];

export interface PeriodicElement {
  Name: string;
  taskID: string;
  businesstpye: string;
  Designer: string;
  Manager: string;
  post: string;
  Reel: string;
  Story: string;
  Extra: string;
  Media: any;
  action: any;

}