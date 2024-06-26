import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { WorkingScheduleComponent } from '../../dashboard/project-management/working-schedule/working-schedule.component';
import { MatIconModule } from '@angular/material/icon';

interface Drop {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-monthly-scheduler',
    standalone: true,
    imports: [
        RouterLink,
        WorkingScheduleComponent,
        MatButtonModule,
        MatMenuModule,
        MatCardModule,
        FullCalendarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        MatIconModule,

    ],
    templateUrl: './monthly-scheduler.component.html',
    styleUrl: './monthly-scheduler.component.scss',
})
export class MonthlySchedulerComponent {
    // Calendar
    calendarOptions: CalendarOptions = {
        initialView: 'dayGridMonth',
        dayMaxEvents: true, // when too many events in a day, show the popover
        weekends: true,
        events: [
            {
                title: 'Meeting with Developers',
                date: '2024-05-02'
            },
            {
                title: 'Consultation with Employees',
                date: '2024-05-06'
            },
            {
                title: 'Call for payment Project NOK',
                date: '2024-05-18'
            },
            {
                title: 'Meeting with UI/UX Designers',
                date: '2024-05-22'
            },
            {
                title: 'Consultation with Doctor',
                date: '2024-05-26'
            },
            {
                title: 'Meeting with Developers',
                date: '2024-06-03'
            },
            {
                title: 'Consultation with Employees',
                date: '2024-07-07'
            },
            {
                title: 'Call for payment Project NOK',
                date: '2024-08-17'
            },
            {
                title: 'Meeting with UI/UX Designers',
                date: '2024-09-22'
            },
            {
                title: 'Consultation with Doctor',
                date: '2024-10-29'
            }
        ],
        plugins: [dayGridPlugin]
    };

    isToggled = false;
    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    // Dark Mode
    toggleTheme() {
        this.themeService.toggleTheme();
    }

    // RTL Mode
    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

    types: Drop[] = [
        { value: 'post-0', viewValue: 'Post' },
        { value: 'story-1', viewValue: 'Story' },
        { value: 'reel-1', viewValue: 'Reel' },
    ]
    designers: Drop[] = [
        { value: 'designer-0', viewValue: 'Vishal Prajapati' },

    ]

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    selected: Date | null;
}
