import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictPageComponent } from './district-page.component';

describe('DistrictPageComponent', () => {
  let component: DistrictPageComponent;
  let fixture: ComponentFixture<DistrictPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
