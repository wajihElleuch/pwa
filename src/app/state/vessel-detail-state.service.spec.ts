import { TestBed } from '@angular/core/testing';

import { VesselDetailStateService } from './vessel-detail-state.service';

describe('VesselDetailStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VesselDetailStateService = TestBed.get(VesselDetailStateService);
    expect(service).toBeTruthy();
  });
});
