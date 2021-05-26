import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenatorComponent } from './senator.component';

describe('SenatorComponent', () => {
  let component: SenatorComponent;
  let fixture: ComponentFixture<SenatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SenatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
