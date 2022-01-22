import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { DragonService } from '../dragon.service';

import { ListComponent } from './list.component';
import { Dragon } from '../dragon.interfaces';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [ReactiveFormsModule, HttpClientModule, RouterTestingModule],
      providers: [DragonService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#orderList should return value from Dragon ordened',
    (done: DoneFn) => {
      const list: Dragon[] = [
        {
          name: 'Mister',
          type: 'Ice',
          id: '45'
        },
        {
          name: 'Abbart',
          type: 'Storm',
          id: '49'
        },
        {
          name: 'Caos',
          type: 'Fire',
          id: '59'
        }
      ];

      const ordened = component.orderList(list);

      expect(ordened[0].name).toEqual('Abbart');
      expect(ordened[1].name).toEqual('Caos');
      expect(ordened[2].name).toEqual('Mister');
      done();

    });
  });
