import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAnalyticsComponent } from './client-analytics.component';

describe('ClientAnalyticsComponent', () => {
  let component: ClientAnalyticsComponent;
  let fixture: ComponentFixture<ClientAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientAnalyticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
