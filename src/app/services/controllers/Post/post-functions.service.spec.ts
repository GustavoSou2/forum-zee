import { TestBed } from '@angular/core/testing';

import { PostFunctionsService } from './post-functions.service';

describe('PostFunctionsService', () => {
  let service: PostFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
