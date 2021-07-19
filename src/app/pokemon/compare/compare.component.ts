import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../core/services/pokemon/pokemon.service';
import { IPokemonDetail } from '../../core/models/pokemon.interface';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {

  public listToCompare: Array<IPokemonDetail> = []

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getListToCompare();
  }


  private getListToCompare() : void  {

    this.pokemonService.listToCompare.forEach(({ name }) => {
      this.pokemonService.getPokemonById(name).subscribe((pokemon) => {
        this.listToCompare.push(pokemon);
      })
    });
  }
}
