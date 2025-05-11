import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketItemsComponent } from './basket-items.component';

describe('BasketItemsComponent', () => {
  let component: BasketItemsComponent;
  let fixture: ComponentFixture<BasketItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasketItemsComponent]
    });
    fixture = TestBed.createComponent(BasketItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
