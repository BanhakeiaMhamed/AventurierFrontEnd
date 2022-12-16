import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteDynamiqueComponent } from './carte-dynamique.component';

describe('CarteDynamiqueComponent', () => {
  let component: CarteDynamiqueComponent;
  let fixture: ComponentFixture<CarteDynamiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteDynamiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteDynamiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
