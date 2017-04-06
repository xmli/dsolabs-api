import { TestBed, inject } from '@angular/core/testing';

import { OrgsService } from './orgs.service';

describe('OrgsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrgsService]
    });
  });

  it('should ...', inject([OrgsService], (service: OrgsService) => {
    expect(service).toBeTruthy();
  }));
});
