import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerSheetComponent } from './designer-sheet.component';

describe('DesignerSheetComponent', () => {
  let component: DesignerSheetComponent;
  let fixture: ComponentFixture<DesignerSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignerSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesignerSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
