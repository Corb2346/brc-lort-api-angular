import { TestBed } from '@angular/core/testing';

import { ApiInterceptInterceptor } from './api-intercept.interceptor';

describe('ApiInterceptInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApiInterceptInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApiInterceptInterceptor = TestBed.inject(ApiInterceptInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
