import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LoaderService } from '../loader/loader.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(
    private loading: LoaderService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loading.setLoading(true, request.url);
    return next.handle(request)
      .pipe(catchError((error: any) => {
        this.loading.setLoading(false, request.url);
        return error;
      }))
      .pipe(map((evt: any) => {
        if (evt instanceof HttpResponse) {
          this.loading.setLoading(false, request.url);
        }
        return evt;
      }));
  }
}
