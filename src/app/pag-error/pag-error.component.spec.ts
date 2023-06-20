import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagErrorComponent } from './pag-error.component';

describe('PagErrorComponent', () => {
  let component: PagErrorComponent;
  let fixture: ComponentFixture<PagErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
