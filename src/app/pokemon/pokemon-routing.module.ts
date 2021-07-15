import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CompareComponent } from './compare/compare.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'comparar',
    component: CompareComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
