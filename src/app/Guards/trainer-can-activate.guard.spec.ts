import { TestBed, async, inject } from '@angular/core/testing';

import { TrainerCanActivateGuard } from './trainer-can-activate.guard';

describe('TrainerCanActivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainerCanActivateGuard]
    });
  });

  it('should ...', inject([TrainerCanActivateGuard], (guard: TrainerCanActivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
