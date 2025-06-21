import { TestBed } from '@angular/core/testing';

import { InboxSearch } from './inbox-search';

describe('InboxSearch', () => {
  let service: InboxSearch;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InboxSearch);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
