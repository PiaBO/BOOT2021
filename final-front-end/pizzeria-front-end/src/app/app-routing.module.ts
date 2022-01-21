import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaListComponent } from './pizza/components/pizza.component';

const routes: Routes = [
   { path: '', component: PizzaListComponent, pathMatch: 'full'},
   { path: 'pizzas', loadChildren: () => import('./pizza/pizza.module').then(mod => mod.PizzaModule)},
   { path: 'ingredients', loadChildren: () => import('./ingredient/ingredient.module').then(mod => mod.IngredientModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
