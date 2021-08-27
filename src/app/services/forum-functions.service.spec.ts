import { TestBed } from '@angular/core/testing';

import { ForumFunctionsService } from './forum-functions.service';

describe('ForumFunctionsService', () => {
  let service: ForumFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForumFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
