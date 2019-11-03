import { TestBed } from '@angular/core/testing';

import { AdjustmentsService } from './adjustments.service';

describe('AdjustmentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdjustmentsService = TestBed.get(AdjustmentsService);
    expect(service).toBeTruthy();
  });
});
