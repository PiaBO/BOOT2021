var resultado;
var resuelto;

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
    if(resultado){
        resultado = false;
        if(resuelto){
             limpiar();
            resuelto = false;
        }
        getElement("#resultado").innerHTML = num;
    }else{
        getElement("#resultado").innerHTML += num;
    }
}

function teclaOperacion(operation){
    let operacion = getElement("#acumulado").innerHTML + getElement("#resultado").innerHTML;
    let arrOperacion = separador(operacion);
    resultado = true;

    if(arrOperacion.length > 1){
        let result = Math.round(eval(operacion.replace(",",".")) * 100) / 100;
        getElement("#resultado").innerHTML = new String(result).replace(".",",");
        getElement("#acumulado").innerHTML = getElement("#resultado").innerHTML + operation;

        resuelto = true;
    }else{
        getElement("#acumulado").innerHTML += getElement("#resultado").innerHTML + operation;
    }
}

function igual(){
    let operacion = getElement("#acumulado").innerHTML + getElement("#resultado").innerHTML;
    getElement("#acumulado").innerHTML += getElement("#resultado").innerHTML + "=";
    let result = Math.round(eval(operacion.replace(",",".")) * 100) / 100;
    getElement("#resultado").innerHTML = new String(result).replace(".",",");
    
    resuelto = true;
    resultado = true;
}

function separador(str){
    let arry = new String(str.split('+').join(', ').split('-').join(', ').split('/').join(', ').split('*'));
    return arry.split(",");
}
window.onload=function(){
    resultado = false;
    resuelto = false;
    limpiar();
    getElements(".num").forEach(btn => btn.addEventListener('click', function(ev){
        teclaNumero(ev.target.value);
    }));
    getElements(".operation").forEach(btn => btn.addEventListener('click', function(ev){
        teclaOperacion(ev.target.value);
    }));
    getElement("#limpiar").addEventListener('click', limpiar);
    getElement("#igual").addEventListener('click', igual);

}