import { TestBed } from '@angular/core/testing';
import { LoaderService } from '../loader/loader.service';
import { HttpRequestInterceptor } from './http-request.interceptor';

describe('HttpRequestInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [HttpRequestInterceptor, LoaderService],
    })
  );

  it('should be created', () => {
    const interceptor: HttpRequestInterceptor = TestBed.inject(
      HttpRequestInterceptor
    );
    expect(interceptor).toBeTruthy();
  });
});
