var resultadoPlaceholder;
var operacionTerminada;

function getElement(item){
    return document.querySelector(item);
}
function getElements(item){
    return document.querySelectorAll(item);
}

function limpiar(){
    getElement("#resultado").innerHTML = "";
    getElement("#acumulado").innerHTML = "";
}

function teclaNumero(num){
    if(resultadoPlaceholder){
        resultadoPlaceholder = false;
        if(operacionTerminada){
            limpiar();
            operacionTerminada = false;
        }
        getElement("#resultado").innerHTML = num;
    }else{
        getElement("#resultado").innerHTML += num;
    }
}

function teclaOperacion(signoOperacion){
    let acumulado = getElement("#acumulado").innerHTML;

    if(acumulado.search("=")!=-1){
       getElement("#acumulado").innerHTML = getElement("#resultado").innerHTML + signoOperacion;
       resultadoPlaceholder = true;
       operacionTerminada = false;
    }else{
        let operacion = acumulado + getElement("#resultado").innerHTML;
        let arrOperacion = separador(operacion);
        resultadoPlaceholder = true;
        if(arrOperacion.length > 1){
            let result = Math.round(eval(operacion.replace(",",".")) * 100) / 100;
            getElement("#resultado").innerHTML = new String(result).replace(".",",");
            getElement("#acumulado").innerHTML = getElement("#resultado").innerHTML + signoOperacion;

            operacionTerminada = false;
        }else{
            getElement("#acumulado").innerHTML += getElement("#resultado").innerHTML + signoOperacion;
        }        
    }


}

function igual(){
    if(!operacionTerminada){
        let acumulado = getElement("#acumulado").innerHTML;
        let arrOperacion = separador(acumulado);
        if(arrOperacion.length > 1){
            let operacion = getElement("#acumulado").innerHTML + getElement("#resultado").innerHTML;
            getElement("#acumulado").innerHTML += getElement("#resultado").innerHTML + "=";
            let result = Math.round(eval(operacion.replace(",",".")) * 100) / 100;
            getElement("#resultado").innerHTML = new String(result).replace(".",",");
        }
        operacionTerminada = true;
        resultadoPlaceholder = true;
    }else{
        
    }
}

function separador(str){
    let arry = new String(str.split('+').join(', ').split('-').join(', ').split('/').join(', ').split('*').join(', ').split('='));
    return arry.split(",");
}

function borrar(){
    let resultado = getElement("#resultado").innerHTML;
    getElement("#resultado").innerHTML = resultado.substr(0,resultado.length-1)
}

window.onload=function(){
    resultadoPlaceholder = false;
    operacionTerminada = false;
    limpiar();
    getElements(".num").forEach(btn => btn.addEventListener('click', function(ev){
        teclaNumero(ev.target.value);
    }));
    getElements(".operation").forEach(btn => btn.addEventListener('click', function(ev){
        teclaOperacion(ev.target.value);
    }));
    getElement("#limpiar").addEventListener('click', limpiar);
    getElement("#igual").addEventListener('click', igual);
    getElement("#borrar").addEventListener('click', borrar);
}