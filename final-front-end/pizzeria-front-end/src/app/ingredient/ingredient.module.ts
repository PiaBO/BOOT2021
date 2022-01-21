import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientComponent, IngredientEditComponent, IngredientListComponent, IngredientViewComponent, INGREDIENT_COMPONENTS } from './components/ingredient.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {TableModule} from 'primeng/table';

const routes: Routes = [
  { path: '', component: IngredientListComponent},
  // { path: 'add', component: Ingredient},
  { path: ':id/edit', component: IngredientEditComponent},
  { path: ':id', component: IngredientViewComponent},
];

@NgModule({
  declarations: [
    INGREDIENT_COMPONENTS
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    TableModule
  ],
  exports:[INGREDIENT_COMPONENTS]
})
export class IngredientModule { }
