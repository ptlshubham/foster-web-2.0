import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { RouterLink } from '@angular/router';


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
}
