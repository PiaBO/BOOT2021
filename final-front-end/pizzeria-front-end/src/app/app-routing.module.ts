import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientsAddComponent } from './ingredient/components/ingredient.component';

const routes: Routes = [
    { path: '', component: IngredientsAddComponent, pathMatch: 'full'},
   { path: 'ingredients', loadChildren: () => import('./ingredient/ingredient.module').then(mod => mod.IngredientModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
