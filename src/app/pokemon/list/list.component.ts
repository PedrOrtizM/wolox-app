import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../core/services/pokemon/pokemon.service';
import { IPokemon } from '../../core/models/pokemon.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public pokemonList: Array<IPokemon> = []
  public offset = 0;
  public limit = 20;
  public inputSearch = '';
  public pokemon: any;
  public isSearch: boolean = false;

  constructor(public pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemonList();
  }

  private getPokemonList() {

    this.pokemonService.getPokemonList(this.limit, this.offset).subscribe(({ results }) => {
      this.pokemonList = results;
    })
  }

  public nextPage(): void {
    this.offset += Number(this.limit);
    this.getPokemonList();
  }

  public previousPage(): void {
    this.offset -= Number(this.limit);
    this.getPokemonList();
  }

  public changeLimit(): void {
    this.offset = 0;
    this.getPokemonList();
  }

  public searchPokemon(): void {
    this.pokemonService.getPokemonById(this.inputSearch.toLowerCase().trim()).subscribe(
      (pokemon) => {
        this.pokemon = pokemon;
        this.isSearch = false;
      }, () => this.isSearch = true)

  }

  public addTocompare(pokemon: IPokemon): void {
    this.pokemonService.listToCompare.push(pokemon);
  }

  public removeToCompare(index: number): void {
    this.pokemonService.listToCompare.splice(index, 1)
  }

}
