import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { tap } from 'rxjs/operators';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    this.showLoading();

    return next.handle(req)
      .pipe(
        tap(
          (event: HttpEvent<any>) => { },
          (error: HttpErrorResponse) => {
            this.showError(error)
          },
          () => this.hideLoading()
          ));
  }

  public showLoading(){
    Swal.fire({
      didOpen: () => Swal.showLoading()
    });
  }

  public hideLoading(){
    Swal.close()
  }

  public showError(error: HttpErrorResponse){
    Swal.fire({
      icon: 'error', // error
      title: 'Error '+error.statusText,
      text:'Ha ocurrido un error inesperado',
      showConfirmButton: true
    })
  }
}
