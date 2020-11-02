import { TestBed } from '@angular/core/testing';

import { RetryService } from './retry.service';

describe('RetryService', () => {
  let service: RetryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
