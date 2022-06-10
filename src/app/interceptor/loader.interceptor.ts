import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { LoaderService } from '../service/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  countHttpRequest: number = 0;
  constructor(private readonly loaderService: LoaderService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.loaderService.show();
    this.countHttpRequest += 1;
    return next.handle(request).pipe(
      map((event) => {
        if (event instanceof HttpResponse) {
          this.countHttpRequest -= 1;
          if (this.countHttpRequest === 0) {
            this.loaderService.hide();
          }
        }
        return event;
      })
    );
  }
}
