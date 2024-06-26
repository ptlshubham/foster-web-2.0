import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyReportCalendarComponent } from './monthly-report-calendar.component';

describe('MonthlyReportCalendarComponent', () => {
  let component: MonthlyReportCalendarComponent;
  let fixture: ComponentFixture<MonthlyReportCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlyReportCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonthlyReportCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
