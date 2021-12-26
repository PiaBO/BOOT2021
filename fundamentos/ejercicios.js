function random(){
    let range = prompt("Dime rango:")

    alert(Math.floor(Math.random() * range)); 
}

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

function pedirArray(){
    let len = prompt("Length: ");
    let val = prompt("Value: ");
    createArray(len,val);
}

function createArray(length, value){
    let array = [];
    array.length = length;
    array.fill(value);
    alert(array);
}
function pedirPrimos(){
    let num = prompt("Di un numero: ");
    primo(num);
}

function primo(num){
    let array = [];
    for (let index = 0; index < num; index++) {
        if(comprobarPrimo(index) === true)
            array.push(index);
    }    

    alert(array);
}

function comprobarPrimo(num){
    for (let index = 2; index < num; index++) {
        if(num % index === 0)
            return false;
    }
    return true;
}

function validarDNI(){
    let dni = prompt("dni: ");
    let expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

    if(expresion_regular_dni.test(dni)){
        alert("correcto");
    }else{
        alert("incorrecto");
    }
}

function palindromo(){
    let pal = prompt("Palindromo: ");

    pal = pal.toLocaleLowerCase().replace(/\s/g,"");
    let contador = pal.length-1;
    for (let index = 0; index < pal.length/2; index++) {
        if(pal[index] == pal[contador]){
            contador--;
        }else{
           return alert("No es un palindromo");
        }
    }
    return alert("Es un palindromo");
}