class Calculadora {
    #resultadoPlaceholder;
    #operacionTerminada;
    #operador;
    #resultado;
    #acumulado;

    constructor(resultado, acumulado){
        this.#resultadoPlaceholder = false;
        this.#operacionTerminada = false;
        this.#operador = "";
        this.setResultado = resultado;
        this.setAcumulado = acumulado;
        this.#resultado = "0";
        this.#acumulado = "";
        this.limpiar();
        this.setResultado("0");
    }
    get resultado(){
        return this.#resultado;
    }
    get acumulado(){
        return this.#acumulado;
    }
    get operador(){
        return this.#operador;
    }
    set operador(operador) {
        this.#operador = operador;
    }
    limpiar() {
        this.#resultado = "0";
        this.#acumulado = "";
        this.setResultado(this.#resultado);
        this.setAcumulado(this.#acumulado);
    }

    igual() {
        if(!this.#operacionTerminada){
            let acumulado = this.#acumulado;
            let arrOperacion = this.separador(acumulado.replace(",", "."));
            if (arrOperacion.length > 1) {
                let operacion = this.#acumulado+ this.#resultado;
                this.#acumulado += this.#resultado+ "=";
                this.setAcumulado(this.#acumulado);
                let result = this.calcularResultado(operacion);
                this.#resultado = result;
                this.setResultado(result);
            }
        }
        this.#operacionTerminada = true;
        this.#resultadoPlaceholder = true;
    }
    teclaNumero(num) {
        if (this.#resultadoPlaceholder) {
            this.#resultadoPlaceholder = false;
            if (this.#operacionTerminada) {
                this.limpiar();
                this.#operacionTerminada = false;
            }
            this.#resultado = num;
        } else {
            if(this.#resultado === '0'){
                this.#resultado = num;
                this.setResultado(num);
            }else{
                this.#resultado+= num;
            }
        }
        this.setResultado(this.#resultado);
    }

    teclaOperacion(signoOperacion) {
        let acumulado = this.#acumulado;
        let resultado = this.#resultado;
        this.#operador = signoOperacion;
        if (acumulado.search("=") != -1 || !(acumulado[acumulado.length - 1] >= 0 && acumulado[acumulado.length - 1] <= 9)) {
            if(resultado[resultado.length - 1] ==',')
                this.#resultado +='0';
            this.#acumulado = this.#resultado + signoOperacion;
            this.#resultadoPlaceholder = true;
            this.#operacionTerminada = false;
        } else {
            if(resultado[resultado.length - 1]==',')
                this.#resultado +='0';
            let operacion = acumulado + this.#resultado;
            let arrOperacion = this.separador(operacion);
            this.#resultadoPlaceholder = true;
            if (arrOperacion.length > 1) {
                let result = this.calcularResultado(operacion);
                this.#resultado = result;
                this.#acumulado = result + signoOperacion;
                this.#operacionTerminada = false;
            } else {
                this.#acumulado+= this.#resultado+ signoOperacion;
            }
        }
        this.setResultado(this.#resultado);
        this.setAcumulado(this.#acumulado);
    }

    coma(){
        if(this.#resultado.search(",") == -1){
            this.#resultado += ",";
            this.setResultado(this.#resultado);
        }
    }

    separador(str) {
        str = str.replace(",", ".");
        let arry = new String(str.split('+').join(', ').split('-').join(', ').split('/').join(', ').split('*').join(', ').split('='));
        return arry.split(",");
    }

    calcularResultado(num){
        let result = Math.round(this.calcular(num.replace(",", ".")) * 100) / 100;
        return  new String(result).replace(".", ",");
    }
    borrar() {
        let resultado = this.#resultado;
        
        if(resultado != '0')
        this.#resultado = resultado.substr(0, resultado.length - 1)

        this.setResultado(this.#resultado);
    }

    cambioSigno(){
        this.#resultado = (-1)*this.#resultado;
        this.setResultado(this.#resultado);
    }

    calcular(operacion){
        let operar = this.separador(operacion);
        let result;
        switch(this.#operador){
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
   
}

