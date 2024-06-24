import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { OrganizationService } from '../../core/services/organization.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../../core/core.module';

@Component({
    selector: 'app-sign-in',
    standalone: true,
    imports: [
        RouterLink,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        NgIf,
        MatSnackBarModule,
        HttpClientModule,
        CoreModule
    ],

    templateUrl: './sign-in.component.html',
    styleUrl: './sign-in.component.scss'
})

export class SignInComponent {

    // isToggled
    isToggled = false;
    snackBarConfig = {
        duration: 3000,
        horizontalPosition: 'end' as const,
        verticalPosition: 'top' as const
    };

    constructor(
        private fb: FormBuilder,
        private router: Router,
        public themeService: CustomizerSettingsService,
        private organizationService: OrganizationService,
        private snackBar: MatSnackBar
    ) {
        this.authForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    // Password Hide
    hide = true;

    // Form
    authForm: FormGroup;
    onSubmit() {
        if (this.authForm.valid) {

            this.organizationService.companyLogin(this.authForm.value.email, this.authForm.value.password).subscribe((res: any) => {
                debugger
                if (res.length > 0) {
                    localStorage.setItem('Name', res[0].name);
                    localStorage.setItem('profile', res[0].profile_image);
                    localStorage.setItem('token', res[0].token);
                    localStorage.setItem('Role', res[0].role);
                    localStorage.setItem('Eid', res[0].id);
                    this.snackBar.open('Login Successfully', 'Success', this.snackBarConfig);
                    this.router.navigate(['/']);

                } else if (res == 1) {
                    this.snackBar.open('Incorrect Email! Please check your Email.', 'Wrong Email', this.snackBarConfig);
                } else {
                    this.snackBar.open('Incorrect Password! Please check your Password.', 'Wrong Password', this.snackBarConfig);
                }
            })
        } else {
            this.snackBar.open('Form is invalid. Please check the fields.', 'Re-enter Details', this.snackBarConfig);
        }
    }

    // Dark Mode
    toggleTheme() {
        this.themeService.toggleTheme();
    }

    // Card Border
    toggleCardBorderTheme() {
        this.themeService.toggleCardBorderTheme();
    }

    // RTL Mode
    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}