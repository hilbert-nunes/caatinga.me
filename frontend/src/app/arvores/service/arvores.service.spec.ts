import { TestBed } from '@angular/core/testing';

import { ArvoresService } from './arvores.service';

describe('ArvoresService', () => {
  let service: ArvoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArvoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
