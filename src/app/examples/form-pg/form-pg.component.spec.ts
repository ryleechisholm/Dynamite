import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPgComponent } from './form-pg.component';

describe('FormPgComponent', () => {
  let component: FormPgComponent;
  let fixture: ComponentFixture<FormPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
