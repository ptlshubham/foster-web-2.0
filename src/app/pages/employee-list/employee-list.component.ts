import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatTooltipModule, MatIconModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {
  constructor(
    private router: Router,
    public themeService: CustomizerSettingsService
  ) {
    this.themeService.isToggled$.subscribe(isToggled => {
      this.isToggled = isToggled;
    });
  }

  // isToggled
  isToggled = false;

  // Dark Mode
  toggleTheme() {
    this.themeService.toggleTheme();
  }

  // RTL Mode
  toggleRTLEnabledTheme() {
    this.themeService.toggleRTLEnabledTheme();
  }

  redirectToAddEmployee() : void{
    this.router.navigate(['/employee-list/add-employee'])
  }
}
