import { User } from 'src/app/app.interfaces';
import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getItem should return value from localstorage',
    (done: DoneFn) => {
      const me = service.getItem('me')

      expect(me === false || me.name !== undefined).toBeTruthy();
      done();
  });

  it('#getMe should return value from localstorage',
    (done: DoneFn) => {
      const me = service.getMe();

      expect(typeof me).toBe('object');
      done();
  });

  it('#getUsers should return value from localstorage',
    (done: DoneFn) => {
      const users = service.getUsers();

      expect(typeof users).toBe('object');
      done();
  });
});
