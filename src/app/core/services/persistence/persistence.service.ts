import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  private _token: string = '';

  constructor() {
    this.loadToken();
  }

  public get token() {
    return this._token;
  }

  public set token(value: string) {
    this.setItem('token',value);
    this._token = value;
  }

  private loadToken() {
    const item = localStorage.getItem('token');
    if (item) {
      this._token = JSON.parse(item);
    }
  }

  private setItem(key: string, value: Object) {
    const item = JSON.stringify(value);
    localStorage.setItem(key, item);
  }


}
