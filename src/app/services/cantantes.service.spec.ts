import { TestBed } from '@angular/core/testing';

import { CantantesService } from './cantantes.service';

describe('CantantesService', () => {
  let service: CantantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CantantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
