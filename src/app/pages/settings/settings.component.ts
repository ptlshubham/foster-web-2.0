import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardSettingsComponent } from './dashboard-settings/dashboard-settings.component';


@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    RouterLink, MatCardModule, MatTabsModule, DatePipe, ChangePasswordComponent,AccountSettingsComponent,DashboardSettingsComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

}
