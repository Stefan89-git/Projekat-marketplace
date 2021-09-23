import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopcartFormComponent } from './shopcart-form.component';

describe('ShopcartFormComponent', () => {
  let component: ShopcartFormComponent;
  let fixture: ComponentFixture<ShopcartFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopcartFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopcartFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
