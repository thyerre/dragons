import { RouterModule } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { CardNewRegisterComponent } from './card-new-register.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CardLoginComponent', () => {
  let component: CardNewRegisterComponent;
  let fixture: ComponentFixture<CardNewRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardNewRegisterComponent],
      imports: [ReactiveFormsModule, RouterModule, RouterTestingModule]
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
