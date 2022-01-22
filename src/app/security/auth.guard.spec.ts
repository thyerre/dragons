import { StorageService } from 'src/app/storage/storage.service';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuard } from './auth.guard';
import { RouterModule } from '@angular/router';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, RouterModule],
      providers: [StorageService]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
