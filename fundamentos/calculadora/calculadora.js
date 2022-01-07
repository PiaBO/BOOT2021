
function getElement(item) {
    return document.querySelector(item);
}
function getElements(item) {
return document.querySelectorAll(item);
}

function getResultado(){
    return getElement("#resultado");
}
function getAcumulado(){
    return getElement("#acumulado");
}

class Calculadora {
    #resultadoPlaceholder;
    #operacionTerminada;
    #operador;

    constructor(){
        this.#resultadoPlaceholder = false;
        this.#operacionTerminada = false;
        this.#operador = "";
        this.limpiar();
        getResultado().innerHTML = "0";
    }
    
    limpiar() {
        getResultado().innerHTML = "0";
        getAcumulado().innerHTML = "";
    }

    igual() {
        if(!this.#operacionTerminada){
            let acumulado = getAcumulado().innerHTML;
            let arrOperacion = this.separador(acumulado.replace(",", "."));
            if (arrOperacion.length > 1) {
                let operacion = getAcumulado().innerHTML+ getResultado().innerHTML;
                getAcumulado().innerHTML += getResultado().innerHTML+ "=";
                let result = this.calcularResultado(operacion);
                getResultado().innerHTML = result;
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
            getResultado().innerHTML = num;
        } else {
            if(getResultado().innerHTML === '0'){
                getResultado().innerHTML = num;
            }else{
                getResultado().innerHTML+= num;
            }
        }
    }

    teclaOperacion(signoOperacion) {
        let acumulado = getAcumulado().innerHTML;
        this.#operador = signoOperacion;
        if (acumulado.search("=") != -1) {
            getAcumulado().innerHTML = getResultado().innerHTML+ signoOperacion;
            this.#resultadoPlaceholder = true;
            this.#operacionTerminada = false;
        } else {
            let operacion = acumulado + getResultado().innerHTML;
            let arrOperacion = this.separador(operacion);
            this.#resultadoPlaceholder = true;
            if (arrOperacion.length > 1) {
                let result = this.calcularResultado(operacion);
                getResultado().innerHTML = result;
                getAcumulado().innerHTML = result + signoOperacion;
                this.#operacionTerminada = false;
            } else {
                getAcumulado().innerHTML+= getResultado().innerHTML+ signoOperacion;
            }
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
        let resultado = getResultado().innerHTML;
        
        if(resultado != '0')
        getResultado().innerHTML = resultado.substr(0, resultado.length - 1)
    }

    cambioSigno(){
        getResultado().innerHTML = (-1)*getResultado().innerHTML;
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

window.onload = function () {
    var calculadora = new Calculadora();
    getElements(".num").forEach(btn => btn.addEventListener('click', function (ev) {
        calculadora.teclaNumero(ev.target.value);
    }));
    getElements(".operation").forEach(btn => btn.addEventListener('click', function (ev) {
        calculadora.teclaOperacion(ev.target.value);
    }));
    getElement("#limpiar").addEventListener('click',
        function(){
            calculadora.limpiar();
        }
    );
    getElement("#igual").addEventListener('click', 
        function(){
            calculadora.igual();
        }
    );
    getElement("#borrar").addEventListener('click', 
        function(){
            calculadora.borrar();
        }
    );
    getElement("#cambioSigno").addEventListener('click', 
    function(){
        calculadora.cambioSigno();
    }
);
    
    document.body.addEventListener('keyup', function(ev){teclado(ev);});

    function teclado(tecla){
        if(tecla.key >= 0 && tecla.key <= 9){
            calculadora.teclaNumero(tecla.key);
        }else{
            switch(tecla.key){
                case "Backspace": calculadora.borrar();
                    break;
                case "Delete": calculadora.limpiar();
                    break;
                case "/": calculadora.teclaOperacion(tecla.key);
                    break;
                case "*": calculadora.teclaOperacion(tecla.key);
                    break;
                case "+": calculadora.teclaOperacion(tecla.key);
                    break;                    
                case "-": calculadora.teclaOperacion(tecla.key);
                    break;            
                case "Enter": calculadora.igual();
                    break;    
                case ",":calculadora.teclaNumero(tecla.key);
                    break;             
            }
        }
    }
}