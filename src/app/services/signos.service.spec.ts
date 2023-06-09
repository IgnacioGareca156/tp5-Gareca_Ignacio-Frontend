import { TestBed } from '@angular/core/testing';

import { SignosService } from './signos.service';

describe('SignosService', () => {
  let service: SignosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
