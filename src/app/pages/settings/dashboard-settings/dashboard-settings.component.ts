import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-dashboard-settings',
  standalone: true,
  imports: [
    RouterLink,
    NgClass, 
    MatDividerModule, 
    MatIconModule,
    MatButtonModule, 
    NgScrollbarModule  ,
    MatSlideToggleModule       
        ],
  templateUrl: './dashboard-settings.component.html',
  styleUrl: './dashboard-settings.component.scss'
})
export class DashboardSettingsComponent {

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

  // Sidebar Dark
  toggleSidebarTheme() {
      this.themeService.toggleSidebarTheme();
  }

  // Hide Sidebar
  toggleHideSidebarTheme() {
      this.themeService.toggleHideSidebarTheme();
  }

  // Header Dark Mode
  toggleHeaderTheme() {
      this.themeService.toggleHeaderTheme();
  }

  // Card Border
  toggleCardBorderTheme() {
      this.themeService.toggleCardBorderTheme();
  }


  
}
