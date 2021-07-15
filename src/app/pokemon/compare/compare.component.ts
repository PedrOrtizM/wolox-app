import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../core/services/pokemon/pokemon.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {

  public listToCompare:any = []
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    console.log(this.pokemonService.listToCompare);
    this.pokemonService.listToCompare.forEach(({name} : any) => {
      this.pokemonService.getPokemonById(name).subscribe(pokemon=>{
        console.log(pokemon);
        
        this.listToCompare.push(pokemon);
      })
    });
  }

}
