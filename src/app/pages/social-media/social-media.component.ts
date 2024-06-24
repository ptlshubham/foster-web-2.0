import { Component } from '@angular/core';
import { FacebookService } from '../../core/services/facebook.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterLinkActive,
    CommonModule],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent {
  constructor(private facebookService: FacebookService) { }
  async loginWithFacebook() {
    try {
      const authResponse = await this.facebookService.login();
      console.log('Auth Response:', authResponse);

      const userData = await this.facebookService.getUserData();
      console.log('User Data:', userData);

      // Store access token and user data in localStorage or your preferred storage
      // localStorage.setItem('fb_access_token', authResponse.accessToken);
      localStorage.setItem('fb_user_data', JSON.stringify(userData));

      // Show user statistics or handle the user data as required
      this.showUserStatistics(userData);
    } catch (error) {
      console.error(error);
    }
  }

  showUserStatistics(userData: any) {
    // Implement the logic to show user statistics
    console.log('User Statistics:', userData);
  }
}
