import { TestBed } from '@angular/core/testing';

import { OfflineManageService } from './offline-manage.service';

describe('OfflineManageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfflineManageService = TestBed.get(OfflineManageService);
    expect(service).toBeTruthy();
  });
});
