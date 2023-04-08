import { TestBed } from '@angular/core/testing';

import { WallhavenService } from './wallhaven.service';

describe('WallhavenService', () => {
  let service: WallhavenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WallhavenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
