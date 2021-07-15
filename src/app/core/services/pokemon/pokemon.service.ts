import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public listToCompare :any = [];

  constructor(private http: HttpClient) { }

  public getPokemonList(limit: number, offset: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  }

  public getPokemonById(id: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  }


}
