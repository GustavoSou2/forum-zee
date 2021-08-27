import { TestBed } from '@angular/core/testing';

import { UserFunctionsService } from './user-functions.service';

describe('UserFunctionsService', () => {
  let service: UserFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
