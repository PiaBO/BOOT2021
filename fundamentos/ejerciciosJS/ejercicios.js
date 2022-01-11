function random(range){
    // let range = prompt("Dime rango:")
    //alert(Math.floor(Math.random() * range)); 
    let res = Math.floor(Math.random() * range);
    return res;
};

function adivinarNumero(){
    let num = Math.floor(Math.random() * 100);
    var attempt = 10;

    while(attempt){
        let userNum = prompt("Dime un número: ");
        if (userNum == num) {
            return alert("Correcto el número era "+num);
        } else if(userNum > num){
            alert("El número es menor");
        }else{
            alert("El número es mayor");
        }
        attempt--;
    }

    return alert("Has perdido")
}

function pedirArray(length, value){
    let len = length;
    let val = value;
    return createArray(len,val);
}

function createArray(length, value){
    let array = [];
    array.length = length;
    array.fill(value);
    return array;
}
function pedirPrimos(){
    let num = prompt("Di un numero: ");
    primo(num);
}

function primo(num){
    let array = [];
    for (let index = 2; index < num; index++) {
        if(comprobarPrimo(index) === true)
            array.push(index);
    }    

    return(array);
}

function comprobarPrimo(num){
    for (let index = 2; index < num; index++) {
        if(num % index === 0)
            return false;
    }
    return true;
}

function validarDNI(dni){
    let expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

    if(expresion_regular_dni.test(dni)){
        return true;
    }else{
        return false;
    }
}

function palindromo(p){
    //let pal = prompt("Palindromo: ");

    let pal = p.toLocaleLowerCase().replace(/\s/g,"");
    let contador = pal.length-1;
    if(contador < 1)
        return false;

    for (let index = 0; index < pal.length/2; index++) {
        if(pal[index] == pal[contador]){
            contador--;
        }else{
           return false;
        }
    }
    return true;
}

//Objetos
function createNewGame(range, attempt){
    let obj = {};
    obj.range = range;
    obj.attempt = attempt;

    return obj;
}

// ../juegoAdivinaNumero/game.js
// class Game{

//     constructor(range,attempt){
//         this._range = range;
//         this._attempt = attempt;
//     }
//     check(userNum) {
//         num = Math.floor(Math.random() * this._range);
//         while(this._attempt){
//             let userNum = pedirNumero();
//             if (userNum == num) {
//                 return mostrarPantalla("Correcto el número era "+num);
//             } else if(userNum > num){
//                 mostrarPantalla("El número es menor");
//             }else{
//                 mostrarPantalla("El número es mayor");
//             }
//             this._attempt--;
//         }
//         return mostrarPantalla("Has perdido")
//     }
// }
// function pedirNumero(){
//     return prompt("Dime un número: ");
// }
// function mostrarPantalla(texto){
//     alert(texto);
// }
