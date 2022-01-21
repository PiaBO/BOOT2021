import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaEditComponent, PizzaListAdminComponent, PizzaListComponent, PizzasAddComponent, PizzaViewComponent, PIZZA_COMPONENTS } from '../pizza/components/pizza.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IngredientModule } from '../ingredient';
import { IngredientRecipeComponent } from '../ingredient/components/ingredient.component';

const routes: Routes = [
  { path: '', component: PizzaListComponent},
  { path: 'admin', component: PizzaListAdminComponent},
  { path: 'add', component: PizzasAddComponent},
  { path: ':id/edit', component: PizzaEditComponent},
  { path: 'admin/:id/edit', component: PizzaEditComponent},
  { path: ':id', component: PizzaViewComponent},
  { path: 'admin/:id', component: PizzaViewComponent},

];
@NgModule({
  declarations: [
    PIZZA_COMPONENTS
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports:[PIZZA_COMPONENTS]
})
export class PizzaModule { }
