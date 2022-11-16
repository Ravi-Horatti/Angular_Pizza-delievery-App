import { TestBed } from '@angular/core/testing';

import { BuildserviceService } from './buildservice.service';

describe('BuildserviceService', () => {
  let service: BuildserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildserviceService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
