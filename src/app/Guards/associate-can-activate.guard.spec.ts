import { TestBed, async, inject } from '@angular/core/testing';

import { AssociateCanActivateGuard } from './associate-can-activate.guard';

describe('AssociateCanActivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssociateCanActivateGuard]
    });
  });

  it('should ...', inject([AssociateCanActivateGuard], (guard: AssociateCanActivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
