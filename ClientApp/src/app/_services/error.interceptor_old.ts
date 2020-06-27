import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpErrorResponse, HTTP_INTERCEPTORS } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Observable, of, throwError } from "rxjs";

//import 'rxjs/add/operator/do';
//import 'rxjs/add/operator/catch';

//const result: Observable<number> = of(1, 2, 3).pipe(
//  catchError(err => throwError(new Error('lol'))),
//);

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(
    req: import("@angular/common/http").HttpRequest<any>,
    next: import("@angular/common/http").HttpHandler
  ): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
     return <any>next.handle(req).pipe(
      catchError (error => {
        if (error.status === 401) { return throwError(error.statusText); }

        if (error instanceof HttpErrorResponse) {
          const applicationError = error.headers.get('Application-Error');

          if (applicationError) { return throwError(applicationError); }

          const serverError = error.error;
          let modalStateErrors = '';

          if (serverError.errors && typeof serverError.errors === 'object') {
            for (const key in serverError.erros) {
              if (serverError.errors[key]) { modalStateErrors += serverError.errors[key] + '\n'; }
            }
          }

          return throwError(modalStateErrors || serverError || 'Server Error');
        }

      })
    );
  }
}

export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true
}
