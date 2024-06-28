import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterLink } from '@angular/router';
import { CoreModule } from '../../../core/core.module';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
  selector: 'app-add-client',
  standalone: true,
  imports: [
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    RouterLink,
    MatTableModule,
    CommonModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIcon,
    ReactiveFormsModule,
    CoreModule,
    HttpClientModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.scss'
})
export class AddClientComponent {

  authForm: FormGroup;
  isToggled = false;
  hide = true;

  constructor(
    public themeService: CustomizerSettingsService,
    private router: Router,
    private fb: FormBuilder,

  ){}

  ngOnInit(): void{
    this.authForm = this.fb.group({
      name: ['', Validators.required],
      business: ['', Validators.required],
      post: ['', Validators.required],
      story: ['', Validators.required],
      reels: ['', Validators.required],
      extra: ['', Validators.required],
      fb: ['', Validators.required],
      tw: ['', Validators.required],
      ld: ['', Validators.required],
      yt: ['', Validators.required],
      in: ['', Validators.required,],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
    this.themeService.isToggled$.subscribe(isToggled => {
      this.isToggled = isToggled;
    });
  }
  onSubmit() {
    if (this.authForm.valid) {
      this.router.navigate(['/']);
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }
  redirectToclientlist(): void {
    this.router.navigate(['/client-list']);
  }
}
