import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { PersistenceService } from '../services/persistence/persistence.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private persistenceService: PersistenceService, private router: Router) { }
   canLoad(route: Route): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
     if (this.persistenceService.token && route.path === 'registro') {
       this.router.navigate(['/pokemon']);
       return false;
     }
     if(!this.persistenceService.token){
      this.router.navigate(['/']);
     }
     return this.persistenceService.token ? true : false;
   }

}
