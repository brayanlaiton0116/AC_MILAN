import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaruselComponent } from './carusel.component';

describe('CaruselComponent', () => {
  let component: CaruselComponent;
  let fixture: ComponentFixture<CaruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaruselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
