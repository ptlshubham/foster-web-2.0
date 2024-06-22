import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActiveCoursesComponent } from './active-courses/active-courses.component';
import { ActiveStudentsComponent } from './active-students/active-students.component';
import { AverageEnrollmentRateComponent } from './average-enrollment-rate/average-enrollment-rate.component';
import { CompletionStatusComponent } from './completion-status/completion-status.component';
import { CoursesCategoriesComponent } from './courses-categories/courses-categories.component';
import { EnrolledStudentsComponent } from './enrolled-students/enrolled-students.component';
import { StudentsProgressComponent } from './students-progress/students-progress.component';
import { TimeSpendingsComponent } from './time-spendings/time-spendings.component';
import { TodaysCourseComponent } from './todays-course/todays-course.component';
import { TopInstructorsComponent } from './top-instructors/top-instructors.component';
import { TotalCoursesSalesComponent } from './total-courses-sales/total-courses-sales.component';
import { TotalInstructorsComponent } from './total-instructors/total-instructors.component';
import { VideoCoursesComponent } from './video-courses/video-courses.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StatsComponent } from '../client-analytics/stats/stats.component';
import { MostLeadsComponent } from '../client-analytics/most-leads/most-leads.component';
import { CountryStatsComponent } from '../client-analytics/country-stats/country-stats.component';
import { EarningReportsComponent } from '../client-analytics/earning-reports/earning-reports.component';
import { TasksStatsComponent } from '../client-analytics/tasks-stats/tasks-stats.component';
import { TopCustomersComponent } from '../client-analytics/top-customers/top-customers.component';
import { RecentLeadsComponent } from '../client-analytics/recent-leads/recent-leads.component';
import { ToDoListComponent } from '../client-analytics/to-do-list/to-do-list.component';
import { ClientPaymentStatusComponent } from '../client-analytics/client-payment-status/client-payment-status.component';
import { TotalLeadsComponent } from '../client-analytics/total-leads/total-leads.component';

@Component({
  selector: 'app-client-analytics',
  standalone: true,
  imports: [WelcomeComponent, ActiveCoursesComponent, EnrolledStudentsComponent, CompletionStatusComponent, ActiveStudentsComponent, CoursesCategoriesComponent, TopInstructorsComponent, TotalCoursesSalesComponent, VideoCoursesComponent, TotalInstructorsComponent, StudentsProgressComponent, TimeSpendingsComponent, AverageEnrollmentRateComponent, TodaysCourseComponent, StatsComponent, MostLeadsComponent, CountryStatsComponent, EarningReportsComponent, TasksStatsComponent, TopCustomersComponent, RecentLeadsComponent, ToDoListComponent, ClientPaymentStatusComponent, TotalLeadsComponent, RouterLink],
  templateUrl: './client-analytics.component.html',
  styleUrl: './client-analytics.component.scss'
})
export class ClientAnalyticsComponent {

}
