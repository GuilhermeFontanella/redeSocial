import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerFormComponent } from './date-picker-form.component';

describe('DatePickerFormComponent', () => {
  let component: DatePickerFormComponent;
  let fixture: ComponentFixture<DatePickerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatePickerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
