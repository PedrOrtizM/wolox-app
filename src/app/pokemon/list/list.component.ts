import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../core/services/pokemon/pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public list: any = []
  public offset = 0;
  public limit = 20;
  public inputSearch = '';
  public pokemon: any;
  public isSearch:boolean = false;

  constructor(public pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemonList();
  }

  private getPokemonList() {

    this.pokemonService.getPokemonList(this.limit, this.offset).subscribe((results: any) => {
      this.list = results.results;
      console.log(results);

    })
  }

  public nextPage() {
    this.offset += Number(this.limit);
    this.getPokemonList();
  }

  public previousPage() {
    this.offset -= Number(this.limit);
    this.getPokemonList();
  }

  public changeLimit() {
    this.offset = 0;
    this.getPokemonList();
  }

  public searchPokemon() {
    this.pokemonService.getPokemonById(this.inputSearch).subscribe(
      pokemon => {
      this.pokemon = pokemon;
      this.isSearch = false;
    },()=>this.isSearch = true)

  }

  public addTocompare(item: any) {
    this.pokemonService.listToCompare.push(item);    
  }

  public removeToCompare(item: any) {
     this.pokemonService.listToCompare.splice(item,1)

  }
  
}
