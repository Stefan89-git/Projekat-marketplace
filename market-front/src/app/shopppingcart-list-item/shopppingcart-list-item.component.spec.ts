import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopppingcartListItemComponent } from './shopppingcart-list-item.component';

describe('ShopppingcartListItemComponent', () => {
  let component: ShopppingcartListItemComponent;
  let fixture: ComponentFixture<ShopppingcartListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopppingcartListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopppingcartListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
