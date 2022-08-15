import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { throwError } from "rxjs/internal/observable/throwError";
import { catchError } from "rxjs/internal/operators/catchError";
@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private Router:Router) {} 
 intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
    const token = localStorage.getItem('token')

   if (token) {
     // If we have a token, we set it to the header
     request = request.clone({
      setHeaders: {
         'Authorization':'Bearer '+ token
       }
     });
  }

  return next.handle(request).pipe(
  	catchError((err) => {
   	 if (err instanceof HttpErrorResponse) {
       	 if (err.status === 401) {
       	 // redirect user to the logout page
          this.Router.navigate(["/Login"]);
     	}
 	 }
  	return throwError(err);
	})
   )
  }
}