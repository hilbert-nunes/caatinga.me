import { TestBed } from '@angular/core/testing';

import { ArvoreService } from './arvore.service';

describe('ArvoreService', () => {
  let service: ArvoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArvoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
