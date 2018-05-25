import { TestBed, inject } from '@angular/core/testing';

import { PostHttpService } from './post-http-service.service';

describe('PostHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostHttpService]
    });
  });

  it('should be created', inject([PostHttpService], (service: PostHttpService) => {
    expect(service).toBeTruthy();
  }));
});
