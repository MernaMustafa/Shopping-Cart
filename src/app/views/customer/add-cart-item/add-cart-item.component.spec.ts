import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCartItemComponent } from './add-cart-item.component';

describe('AddCartItemComponent', () => {
  let component: AddCartItemComponent;
  let fixture: ComponentFixture<AddCartItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCartItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
