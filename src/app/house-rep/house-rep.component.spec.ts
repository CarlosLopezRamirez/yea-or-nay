import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseRepComponent } from './house-rep.component';

describe('HouseRepComponent', () => {
  let component: HouseRepComponent;
  let fixture: ComponentFixture<HouseRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseRepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
