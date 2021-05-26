import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseRepNestedComponent } from './house-rep-nested.component';

describe('HouseRepNestedComponent', () => {
  let component: HouseRepNestedComponent;
  let fixture: ComponentFixture<HouseRepNestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseRepNestedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseRepNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
