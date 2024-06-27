import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import {FormControl, FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { NgIf } from '@angular/common';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [RouterLink, 
    MatCardModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatSelectModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    FormsModule, 
    ReactiveFormsModule, 
    NgxMatTimepickerModule, 
    MatIconModule, 
    MatButtonModule, 
    MatMenuModule, 
    ReactiveFormsModule, 
    NgIf, ],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent {
  hide = true;
  isToggled = false;

  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  authForm: FormGroup;
  constructor(
      private fb: FormBuilder,
      private router: Router,
      public themeService: CustomizerSettingsService
  ) {
      this.authForm = this.fb.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(8)]],
      });
      this.themeService.isToggled$.subscribe(isToggled => {
          this.isToggled = isToggled;
      });
  }

// Dark Mode
toggleTheme() {
    this.themeService.toggleTheme();
}

// RTL Mode
toggleRTLEnabledTheme() {
    this.themeService.toggleRTLEnabledTheme();
}

redirectToEmployeeList() : void{
  this.router.navigate(['/employee-list']);
}
}
