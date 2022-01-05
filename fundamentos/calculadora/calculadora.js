
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

    constructor(){
        this.#resultadoPlaceholder = false;
        this.#operacionTerminada = false;
        this.limpiar();
    }
    
    limpiar() {
        getResultado().innerHTML = "";
        getAcumulado().innerHTML = "";
    }

    igual() {
        if(!this.#operacionTerminada){
            let acumulado = getAcumulado().innerHTML;
            let arrOperacion = this.separador(acumulado);
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
                limpiar();
                this.#operacionTerminada = false;
            }
            getResultado().innerHTML = num;
        } else {
            getResultado().innerHTML+= num;
        }
    }

    teclaOperacion(signoOperacion) {
        let acumulado = getAcumulado().innerHTML;
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
        let arry = new String(str.split('+').join(', ').split('-').join(', ').split('/').join(', ').split('*').join(', ').split('='));
        return arry.split(",");
    }

    calcularResultado(num){
        let result = Math.round(eval(num.replace(",", ".")) * 100) / 100;
        return  new String(result).replace(".", ",");
    }
    borrar() {
        let resultado = getResultado().innerHTML;
        getResultado().innerHTML = resultado.substr(0, resultado.length - 1)
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
    getElement("#limpiar").addEventListener('click', calculadora.limpiar);
    getElement("#igual").addEventListener('click', 
        function(){
            calculadora.igual();
        }
    
    );
    getElement("#borrar").addEventListener('click', calculadora.borrar);
}