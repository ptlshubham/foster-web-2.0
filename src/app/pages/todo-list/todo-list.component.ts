import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { WorkingScheduleComponent } from '../../dashboard/project-management/working-schedule/working-schedule.component';

@Component({
  selector: 'app-todo-list',
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
    MatSelectModule,],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
    // Mat Calendar
    selected: Date | null;

    // Popup Trigger
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }
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
  
    // isToggled
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
  
}
