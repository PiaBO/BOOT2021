import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  operador: string;
  resultado: string;
  acumulado: string;
  operacionTerminada: boolean;
  resultadoPlaceholder: boolean;

  constructor() {
    this.operador = '';
    this.resultado = '';
    this.acumulado = '';
    this.operacionTerminada = false;
    this.resultadoPlaceholder = false;

  }
  public get Resultado(){
    return this.resultado;
  }
  public get Acumulado(){
      return this.acumulado;
  }
  public get Operador(){
      return this.operador;
  }

  public limpiar(){
    this.operador = '';
    this.resultado = '';
    this.acumulado = '';
    this.operacionTerminada = false;
    this.resultadoPlaceholder = false;
  }

  public igual() {
    if(!this.operacionTerminada){
        let acumulado = this.acumulado;
        let arrOperacion = this.separador(acumulado.replace(",", "."));
        if (arrOperacion.length > 1) {
            let operacion = this.acumulado+ this.resultado;
            this.acumulado += this.resultado+ "=";
            let result = this.calcularResultado(operacion);
            this.resultado = result;
        }
    }
    this.operacionTerminada = true;
    this.resultadoPlaceholder = true;
  }

  public separador(str: string) {
    str = str.replace(",", ".");
    let arry = new String(str.split('+').join(', ').split('-').join(', ').split('/').join(', ').split('*').join(', ').split('='));
    return arry.split(",");
  }

  public calcularResultado(num: string){
    num = num.replace(",", ".");
    let result = this.calcular(num);
    return  new String(result).replace(".", ",");
  }

  public calcular(operacion: string){
    let operar = this.separador(operacion);
    let result;
    switch(this.operador){
        case "/": result = parseFloat(operar[0])/parseFloat(operar[1]);
        break;
        case "*": result = parseFloat(operar[0])*parseFloat(operar[1]);
            break;
        case "+": result = parseFloat(operar[0])+parseFloat(operar[1]);
            break;
        case "-": result = parseFloat(operar[0])-parseFloat(operar[1]);
            break;
    }
    return result;
  }
  public teclaNumero(num: string) {
    if (this.resultadoPlaceholder) {
        this.resultadoPlaceholder = false;
        if (this.operacionTerminada) {
            this.limpiar();
            this.operacionTerminada = false;
        }
        this.resultado = num;
    } else {
        if(this.resultado === '0'){
            this.resultado = num;
        }else{
            this.resultado+= num;
        }
    }
  }

  public teclaOperacion(signoOperacion: string) {
    let acumulado = this.acumulado;
    this.operador = signoOperacion;
    if (acumulado.search("=") != -1 || !(parseFloat(acumulado[acumulado.length - 1]) >= 0 && parseFloat(acumulado[acumulado.length - 1]) <= 9)) {
        this.acumulado = this.resultado + signoOperacion;
        this.resultadoPlaceholder = true;
        this.operacionTerminada = false;
    } else {
        let operacion = acumulado + this.resultado;
        let arrOperacion = this.separador(operacion);
        this.resultadoPlaceholder = true;
        if (arrOperacion.length > 1) {
            let result = this.calcularResultado(operacion);
            this.resultado = result;
            this.acumulado = result + signoOperacion;
            this.operacionTerminada = false;
        } else {
            this.acumulado+= this.resultado+signoOperacion;
        }
      }
  }

  borrar() {
    let resultado = this.resultado;

    if(resultado != '0')
    this.resultado = resultado.substr(0, resultado.length - 1)

}

  cambioSigno(){
    let aux = (-1)*parseFloat(this.resultado);
    this.resultado = aux.toString();
  }
  ngOnInit(): void {
  }

}
