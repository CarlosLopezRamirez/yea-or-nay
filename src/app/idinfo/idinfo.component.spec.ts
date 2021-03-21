import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdinfoComponent } from './idinfo.component';

describe('IdinfoComponent', () => {
  let component: IdinfoComponent;
  let fixture: ComponentFixture<IdinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
