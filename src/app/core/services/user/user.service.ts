import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { PersistenceService } from '../persistence/persistence.service';
import { ICountry, IUser } from '../../models/sing-in.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private persistenceService: PersistenceService) { }


  public postSignUp(body: IUser) {
    return this.http.post(environment.userUrl + 'signup', body).pipe(
      tap(({ token }: any) => this.persistenceService.token = token)
    );
  }

  public getCountryList() {
    return this.http.get<Array<ICountry>>(environment.countryUrl + 'all')
  }

}
