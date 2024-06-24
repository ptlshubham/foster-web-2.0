import { Injectable } from '@angular/core';

declare const FB: any;

@Injectable({
  providedIn: 'root'
})
export class FacebookService {
  constructor() {
    this.loadFbSdk();
  }

  loadFbSdk() {
    (window as any).fbAsyncInit = function() {
      FB.init({
        appId     : '3659719231010179', // Replace with your App ID
        cookie     : true,
        xfbml      : true,
        version    : 'v10.0' // Replace with the current version
      });
    };
  }

 
  login() {
    return new Promise((resolve, reject) => {
      FB.login((response: any) => {
        if (response.authResponse) {
          resolve(response.authResponse);
        } else {
          reject('User cancelled login or did not fully authorize.');
        }
      }, { scope: 'public_profile,email' });
    });
  }

  getUserData() {
    return new Promise((resolve, reject) => {
      FB.api('/me', { fields: 'name,email,picture' }, (response: any) => {
        if (!response || response.error) {
          reject('Error occurred while fetching user data.');
        } else {
          resolve(response);
        }
      });
    });
  }
}
