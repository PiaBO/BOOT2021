import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientComponent, INGREDIENT_COMPONENTS } from './components/ingredient.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {TableModule} from 'primeng/table';



@NgModule({
  declarations: [
    INGREDIENT_COMPONENTS
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([]),
    TableModule
  ],
  exports:[INGREDIENT_COMPONENTS]
})
export class IngredientModule { }
