import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IPokemonResponse, IPokemon, IPokemonDetail } from '../../models/pokemon.interface';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public listToCompare: Array<IPokemon>;

  constructor(private http: HttpClient) {
    this.listToCompare = []
  }

  public getPokemonList(limit: number, offset: number) {
    return this.http.get<IPokemonResponse>(`${environment.pokemonUrl}?limit=${limit}&offset=${offset}`)
  }

  public getPokemonById(id: string) {
    return this.http.get<IPokemonDetail>(`${environment.pokemonUrl}/${id}/`);
  }


}
