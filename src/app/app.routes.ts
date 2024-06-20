import { Routes } from '@angular/router';
import { EcommerceComponent } from './dashboard/ecommerce/ecommerce.component';
import { CrmComponent } from './dashboard/crm/crm.component';
import { ProjectManagementComponent } from './dashboard/project-management/project-management.component';
import { LmsComponent } from './dashboard/lms/lms.component';
import { HelpDeskComponent } from './dashboard/help-desk/help-desk.component';
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

export const routes: Routes = [
    {path: '', component: EcommerceComponent},
    {path: 'crm', component: CrmComponent},
    {path: 'project-management', component: ProjectManagementComponent},
    {path: 'lms', component: LmsComponent},
    {path: 'help-desk', component: HelpDeskComponent},
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