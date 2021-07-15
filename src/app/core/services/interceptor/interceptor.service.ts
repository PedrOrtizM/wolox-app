import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersistenceService } from '../persistence/persistence.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private persistenceService:PersistenceService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log(req);
    // console.log(this.persistenceService.token);
    
    return next.handle(req);    
  }
}
