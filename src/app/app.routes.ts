import { Routes } from '@angular/router';
import { ProjectManagementComponent } from './dashboard/project-management/project-management.component';
import { ClientAnalyticsComponent } from './dashboard/client-analytics/client-analytics.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { LockScreenComponent } from './authentication/lock-screen/lock-screen.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { ConfirmEmailComponent } from './authentication/confirm-email/confirm-email.component';
import { InternalErrorComponent } from './common/internal-error/internal-error.component';
import { CesComponent } from './pages/ces/ces.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { TokensComponent } from './pages/tokens/tokens.component';
import { HelpDeskComponent } from './pages/help-desk/help-desk.component';
import { DailyWorkComponent } from './pages/daily-work/daily-work.component';
import { MonthlyReportComponent } from './pages/monthly-report/monthly-report.component';
import { SocialMediaComponent } from './pages/social-media/social-media.component';
import { ClientListComponent } from './pages/client-list/client-list.component';
import { MonthlySchedulerComponent } from './pages/monthly-scheduler/monthly-scheduler.component';
import { MonthlyReportCalendarComponent } from './pages/monthly-report-calendar/monthly-report-calendar.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { AddEmployeeComponent } from './pages/employee-list/add-employee/add-employee.component';
import { DesignerSheetComponent } from './pages/client-list/designer-sheet/designer-sheet.component';
import { TaskManagementComponent } from './pages/task-management/task-management.component';
import { SettingsComponent } from './pages/settings/settings.component';


export const routes: Routes = [
    {path: 'client-analytics', component: ClientAnalyticsComponent},
    {path: '', component: ProjectManagementComponent},
    {path: 'todo-list', component: TodoListComponent},
    {path: 'tokens', component: TokensComponent},
    {path: 'ces', component: CesComponent},
    {path: 'monthly-report', component: MonthlyReportComponent},
    {path: 'help-desk', component: HelpDeskComponent},
    {path: 'daily-work', component: DailyWorkComponent},
    {path: 'social-media', component: SocialMediaComponent},
    {path: 'client-list', component: ClientListComponent},
    {path: 'client-list/designer-sheet', component: DesignerSheetComponent},
    {path: 'employee-list', component: EmployeeListComponent},
    {path: 'employee-list/add-employee', component: AddEmployeeComponent},
    {path: 'monthly-scheduler', component: MonthlySchedulerComponent},
    {path: 'monthly-report-calendar', component: MonthlyReportCalendarComponent},
    {path: 'task-management', component: TaskManagementComponent},
    {path: 'settings', component: SettingsComponent},

    {
        path: 'authentication',
        component: AuthenticationComponent,
        children: [
            {path: '', component: SignInComponent},
            {path: 'sign-up', component: SignUpComponent},
            {path: 'forgot-password', component: ForgotPasswordComponent},
            {path: 'reset-password', component: ResetPasswordComponent},
            {path: 'lock-screen', component: LockScreenComponent},
            {path: 'confirm-email', component: ConfirmEmailComponent},
            {path: 'logout', component: LogoutComponent}
        ]
    },
    {path: 'internal-error', component: InternalErrorComponent},
    // Here add new pages component

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];