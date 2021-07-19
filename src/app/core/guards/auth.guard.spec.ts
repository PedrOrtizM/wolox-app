import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRouteSnapshot } from '@angular/router';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });


  it('Not Should navigate and canLoad true with token', () => {
    const spyRouter = spyOn<any>(guard['router'], 'navigate');
    spyOnProperty(guard['persistenceService'], 'token').and.returnValue('ABC')
    expect(guard.canLoad()).toBeTrue();
    expect(spyRouter).not.toHaveBeenCalled();
  });

  it('Should navigate and canLoad false without token', () => {
    const spyRouter = spyOn<any>(guard['router'], 'navigate');
    spyOnProperty(guard['persistenceService'], 'token').and.returnValue('')
    expect(guard.canLoad()).toBeFalse();
    expect(spyRouter).toHaveBeenCalled();
  });
  it('Should navigate and canActivated false with token', () => {
    const spyRouter = spyOn<any>(guard['router'], 'navigate');
    const mockRoute = { url: [{ path: 'registro' }] }

    spyOnProperty(guard['persistenceService'], 'token').and.returnValue('ABC')

    expect(guard.canActivate(mockRoute as ActivatedRouteSnapshot)).toBeFalse();
    expect(spyRouter).toHaveBeenCalled();
  });

  it('Should navigate and canActivated true without token', () => {
    const spyRouter = spyOn<any>(guard['router'], 'navigate');
    const mockRoute = { url: [{ path: 'registro' }] }

    spyOnProperty(guard['persistenceService'], 'token').and.returnValue('')

    expect(guard.canActivate(mockRoute as ActivatedRouteSnapshot)).toBeTrue();
    expect(spyRouter).not.toHaveBeenCalled();
  });


});
