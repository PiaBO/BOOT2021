import { Component, OnDestroy, OnInit } from '@angular/core';
import { IngredientViewModelService } from '../services/ingredient.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './tmpl-main.component.html',
  styleUrls: ['./component.component.css']
})
export class IngredientComponent implements OnInit {
  constructor(protected vm: IngredientViewModelService) { }
  public get VM(): IngredientViewModelService{ return this.vm; }
  ngOnInit(): void {
    this.vm.list();
  }
}
@Component({
  selector: 'app-ingredient-list',
  templateUrl: './tmpl-list.component.html',
  styleUrls: ['./component.component.css']
})
export class IngredientListComponent implements OnInit {
  constructor(protected vm: IngredientViewModelService) { }
  public get VM(): IngredientViewModelService{ return this.vm; }
  ngOnInit(): void {
  }
}
@Component({
  selector: 'app-ingredient-view',
  templateUrl: './tmpl-view.component.html',
  styleUrls: ['./component.component.css']
})
export class IngredientViewComponent implements OnInit, OnDestroy {
  constructor(protected vm: IngredientViewModelService) { }
  public get VM(): IngredientViewModelService { return this.vm; }
  ngOnInit(): void { }
  ngOnDestroy(): void { }
}
@Component({
  selector: 'app-ingredient-edit',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./component.component.css']
})
export class IngredientEditComponent implements OnInit, OnDestroy {
  constructor(protected vm: IngredientViewModelService) { }
  public get VM(): IngredientViewModelService { return this.vm; }
  ngOnInit(): void { }
  ngOnDestroy(): void { }
}
export const INGREDIENT_COMPONENTS = [
  IngredientComponent, IngredientListComponent,IngredientViewComponent,
  IngredientEditComponent,
];



