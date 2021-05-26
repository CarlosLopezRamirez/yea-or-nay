import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenatorNestedComponent } from './senator-nested.component';

describe('SenatorNestedComponent', () => {
  let component: SenatorNestedComponent;
  let fixture: ComponentFixture<SenatorNestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenatorNestedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SenatorNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
