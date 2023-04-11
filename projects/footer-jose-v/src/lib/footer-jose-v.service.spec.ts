import { TestBed } from '@angular/core/testing';

import { FooterJoseVService } from './footer-jose-v.service';

describe('FooterJoseVService', () => {
  let service: FooterJoseVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooterJoseVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
