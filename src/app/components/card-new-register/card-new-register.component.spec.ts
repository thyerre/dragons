import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNewRegisterComponent } from './card-new-register.component';

describe('CardLoginComponent', () => {
  let component: CardNewRegisterComponent;
  let fixture: ComponentFixture<CardNewRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardNewRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNewRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
