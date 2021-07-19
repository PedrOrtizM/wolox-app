import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../../environments/environment.prod';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('signUp should be post and return observable', () => {
    service.postSignUp({} as any).subscribe(data => {
      expect(data).toBeTruthy();
    });
    const httpMock = httpTestingController.expectOne(environment.userUrl + 'signup');
    
    expect(httpMock.request.method).toBe('POST');
  });

  it('getCountryList should be GET and return observable', () => {
    service.getCountryList().subscribe(data => {
      expect(data).toBeTruthy();
    });
    const httpMock = httpTestingController.expectOne(environment.countryUrl + 'all');
    
    expect(httpMock.request.method).toBe('GET');
  });
  
});
