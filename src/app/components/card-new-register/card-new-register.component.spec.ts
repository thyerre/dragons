import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from 'src/app/interfaces/user.interface';

import { CardNewRegisterComponent } from './card-new-register.component';

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

  it('#verifyPasswordEqual should return value booleano',
    async (done: DoneFn) => {

      const values: User = {
        password: 'teste123',
        repeat_password: 'teste123',
        user: 'thyerre'
      };

      const result = await component.verifyPasswordEqual(values);
      expect(result).toBeTrue();
      done();
    });
});
