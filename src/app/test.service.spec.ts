import { TestBed, inject } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestService]
    });
  });

  it('should be created', inject([TestService], (service: TestService) => {
    expect(service).toBeTruthy();
  }));

  it('should have add method', inject([TestService], (service: TestService) => {
    expect(service.add).toBeTruthy();
  }));

  it('should add correctly', inject([TestService], (service: TestService) => {
    expect(service.add(1,2)).toEqual(3);
  }));

  it('should return 0 for add without args', inject([TestService], (service: TestService) => {
    expect(service.add('d','t')).toEqual(0);
  }));
});
