import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, CanLoad } from '@angular/router';
import { PersistenceService } from '../services/persistence/persistence.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(private persistenceService: PersistenceService, private router: Router) { }

  canLoad(): boolean {

    if (!this.persistenceService.token) {
      this.router.navigate(['/']);
    }
    return !!this.persistenceService.token;
  }

  canActivate(
    route: ActivatedRouteSnapshot): boolean {

    const [{ path }] = route.url;

    if (this.persistenceService.token && path === 'registro') {
      this.router.navigate(['/pokemon']);
      return false;
    }

    return !!!this.persistenceService.token;
  }

}
