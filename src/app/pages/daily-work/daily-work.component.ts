import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { CommonModule, NgIf } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SelectionModel } from '@angular/cdk/collections';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../core/core.module';

@Component({
    selector: 'app-daily-work',
    standalone: true,
    imports: [MatCardModule,
        MatMenuModule,
        MatButtonModule,
        RouterLink,
        MatTableModule,
        MatPaginatorModule,
        NgIf,
        MatCheckboxModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatSelectModule,
        MatNativeDateModule,
        MatIconModule,
        MatInputModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CoreModule
    ],
    templateUrl: './daily-work.component.html',
    styleUrl: './daily-work.component.scss'
})
export class DailyWorkComponent {

    topcustomer: string[] = []
    displayedColumns: string[] = ['customer', 'email', 'source', 'status', 'action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    selection = new SelectionModel<PeriodicElement>(true, []);

    displayedUserColumns: string[] = ['user', 'viewProfileLink'];
    dataUserSource = new MatTableDataSource<userElement>(ELEMENTDATA);
    @ViewChild(MatPaginator) paginator: MatPaginator;
    selectedDate: Date = new Date(); // Initialize with today's date

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    // isToggled
    isToggled = false;

    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    toggleAllRows() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.dataSource.data);
    }

    // checkboxLabel(row?: PeriodicElement): string {
    //   if (!row) {
    //       return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    //   }
    //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.customer + 1}`;
    // }

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    // RTL Mode
    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        customer: {
            img: 'assets/images/users/user1.jpg',
            name: 'Carlos Daley'
        },
        email: 'carlos@daxa.com',
        source: 'Website',
        status: {
            new: 'New',
            // won: 'Won',
            // inProgress: 'In Progress',
            // lost: 'Lost',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        customer: {
            img: 'assets/images/users/user2.jpg',
            name: 'Dorothy Young'
        },
        email: 'dorothy@daxa.com',
        source: 'Referral',
        status: {
            // new: 'New',
            won: 'Won',
            // inProgress: 'In Progress',
            // lost: 'Lost',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        customer: {
            img: 'assets/images/users/user3.jpg',
            name: 'Greg Woody'
        },
        email: 'greg@daxa.com',
        source: 'Cold Call',
        status: {
            // new: 'New',
            // won: 'Won',
            inProgress: 'In Progress',
            // lost: 'Lost',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        customer: {
            img: 'assets/images/users/user4.jpg',
            name: 'Deborah Rosol'
        },
        email: 'deborah@daxa.com',
        source: 'Email Campaign',
        status: {
            // new: 'New',
            // won: 'Won',
            // inProgress: 'In Progress',
            lost: 'Lost',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        customer: {
            img: 'assets/images/users/user5.jpg',
            name: 'Kendall Allen'
        },
        email: 'kendall@daxa.com',
        source: 'Online Store',
        status: {
            new: 'New',
            // won: 'Won',
            // inProgress: 'In Progress',
            // lost: 'Lost',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        customer: {
            img: 'assets/images/users/user6.jpg',
            name: 'Mark Stjohn'
        },
        email: 'mark@daxa.com',
        source: 'Online Store',
        status: {
            new: 'New',
            // won: 'Won',
            // inProgress: 'In Progress',
            // lost: 'Lost',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        customer: {
            img: 'assets/images/users/user7.jpg',
            name: 'Joan Stanley'
        },
        email: 'joan@daxa.com',
        source: 'Email Campaign',
        status: {
            new: 'New',
            // won: 'Won',
            // inProgress: 'In Progress',
            // lost: 'Lost',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        customer: {
            img: 'assets/images/users/user8.jpg',
            name: 'Jacob Bell'
        },
        email: 'jacob@daxa.com',
        source: 'Cold Call',
        status: {
            // new: 'New',
            won: 'Won',
            // inProgress: 'In Progress',
            // lost: 'Lost',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        customer: {
            img: 'assets/images/users/user9.jpg',
            name: 'Donald Bryan'
        },
        email: 'donald@daxa.com',
        source: 'Referral',
        status: {
            // new: 'New',
            won: 'Won',
            // inProgress: 'In Progress',
            // lost: 'Lost',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        customer: {
            img: 'assets/images/users/user10.jpg',
            name: 'Kristina Blomquist'
        },
        email: 'kristina@daxa.com',
        source: 'Website',
        status: {
            // new: 'New',
            // won: 'Won',
            // inProgress: 'In Progress',
            lost: 'Lost',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    }
];
const ELEMENTDATA: userElement[] = [
    {
        user: {
            img: 'assets/images/users/user6.jpg',
            name: 'Mark Stjohn',
            customerID: 'Customer ID #76431'
        },
        viewProfileLink: '/crm-page/customers'
    },
    {
        user: {
            img: 'assets/images/users/user7.jpg',
            name: 'Joan Stanley',
            customerID: 'Customer ID #64815'
        },
        viewProfileLink: '/crm-page/customers'
    },
    {
        user: {
            img: 'assets/images/users/user8.jpg',
            name: 'Jacob Bell',
            customerID: 'Customer ID #34581'
        },
        viewProfileLink: '/crm-page/customers'
    },
    {
        user: {
            img: 'assets/images/users/user9.jpg',
            name: 'Donald Bryan',
            customerID: 'Customer ID #67941'
        },
        viewProfileLink: '/crm-page/customers'
    },
    {
        user: {
            img: 'assets/images/users/user10.jpg',
            name: 'Kristina Blomquist',
            customerID: 'Customer ID #36985'
        },
        viewProfileLink: '/crm-page/customers'
    },
    {
        user: {
            img: 'assets/images/users/user11.jpg',
            name: 'Jeffrey Morrison',
            customerID: 'Customer ID #26985'
        },
        viewProfileLink: '/crm-page/customers'
    },
    {
        user: {
            img: 'assets/images/users/user1.jpg',
            name: 'Carlos Daley',
            customerID: 'Customer ID #76431'
        },
        viewProfileLink: '/crm-page/customers'
    },
    {
        user: {
            img: 'assets/images/users/user2.jpg',
            name: 'Dorothy Young',
            customerID: 'Customer ID #76431'
        },
        viewProfileLink: '/crm-page/customers'
    },
    {
        user: {
            img: 'assets/images/users/user3.jpg',
            name: 'Greg Woody',
            customerID: 'Customer ID #76431'
        },
        viewProfileLink: '/crm-page/customers'
    },
    {
        user: {
            img: 'assets/images/users/user4.jpg',
            name: 'Deborah  Rosol',
            customerID: 'Customer ID #76431'
        },
        viewProfileLink: '/crm-page/customers'
    },
    {
        user: {
            img: 'assets/images/users/user5.jpg',
            name: 'Kendall Allen',
            customerID: 'Customer ID #76431'
        },
        viewProfileLink: '/crm-page/customers'
    },
    {
        user: {
            img: 'assets/images/users/user12.jpg',
            name: 'Michael Marquez',
            customerID: 'Customer ID #76431'
        },
        viewProfileLink: '/crm-page/customers'
    }
];
export interface PeriodicElement {
    customer: any
    email: string;
    source: string;
    status: any;
    action: any;

}
export interface userElement {
    user: any;
    viewProfileLink: string;
}
