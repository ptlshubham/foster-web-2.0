import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monthly-report',
  standalone: true,
  imports: [MatCardModule, RouterLink],
  templateUrl: './monthly-report.component.html',
  styleUrl: './monthly-report.component.scss'
})
export class MonthlyReportComponent {
  isToggled = false;

  constructor(
      public themeService: CustomizerSettingsService,
      private router: Router
  ) {
      this.themeService.isToggled$.subscribe(isToggled => {
          this.isToggled = isToggled;
      });
  }
  redirectToScheduler(): void {
    this.router.navigate(['/monthly-scheduler']);
  }

  // Dark Mode
  toggleTheme() {
      this.themeService.toggleTheme();
  }
}
