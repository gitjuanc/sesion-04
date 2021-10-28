import { TestBed } from '@angular/core/testing';

import { HarrypoterService } from './harrypoter.service';

describe('HarrypoterService', () => {
  let service: HarrypoterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HarrypoterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
