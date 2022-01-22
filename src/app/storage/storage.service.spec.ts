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

      expect(typeof me === 'object' || typeof me === 'boolean').toBeTrue();
      done();
  });

  it('#getUsers should return value from localstorage',
    (done: DoneFn) => {
      const users = service.getUsers();

      expect(typeof users === 'object' || typeof users === 'boolean').toBeTrue();
      done();
  });

  it('#verifyUserAndPassword should return value promise from localstorage',
    async (done: DoneFn) => {
      const login: User = {
        user: 'thyerre',
        password: '123'
      };
      const users = await service.verifyUserAndPassword(login);

      expect(typeof users).toBe('boolean');
      done();
  });
});
