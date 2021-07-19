import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'pokemon', 
    loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule),
    canLoad:[AuthGuard]
  },
  {
    path:'**',
    redirectTo: ''
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
