import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { FormsModule } from '@angular/forms';
import { CompareComponent } from './compare/compare.component';



@NgModule({
  declarations: [
    ListComponent,
    CompareComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    FormsModule
  ]
})
export class PokemonModule { }
