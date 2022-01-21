import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {
  login = "";
  // menu = [{ texto: 'Ingredients', icono: '', componente: IngredientComponent}];

  // actual: any = this.menu[0].componente;
  constructor() { }

  public seleccionar(indice: number): void {
    // this.actual = this.menu[indice].componente;
  }
  public inicio(){
    // this.actual = this.menu[0];
  }

  ngOnInit(): void {
  }
}

