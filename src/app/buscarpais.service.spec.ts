import { TestBed } from '@angular/core/testing';

import { BuscarpaisService } from './buscarpais.service';

describe('BuscarpaisService', () => {
  let service: BuscarpaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarpaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
