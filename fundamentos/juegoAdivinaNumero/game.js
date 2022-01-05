function $(item){
    return document.querySelector(item);
}

class Game{
    #num;
    #maxAttempts;
    #range;
    #attempt
    constructor(range,attempts){
        this.#range = range;
        this.#maxAttempts = attempts;
        this.init();
    }
    init(){
        this.#num = Math.floor(Math.random() * this.#range);
        this.#attempt = 1;
    }
    check(userNum) {
        if(this.#attempt > 0 && this.#attempt < this.#maxAttempts){
            if (userNum == this.#num) {
                return mostrarPantalla("Correcto el número era "+this.#num);
            } else if(userNum > this.#num){
                mostrarPantalla("El número es menor");
            }else{
                mostrarPantalla("El número es mayor");
            }    
        }else{
            return mostrarPantalla("Has perdido")
        }
    }
}
function pedirNumero(){
    return prompt("Dime un número: ");
}
function mostrarPantalla(texto){
    alert(texto);
}

function gameSettings(){
    console.log("click")
    let range = $('#range').value;
    let attempts = $('#attempts').value;

    if(range > 0 && attempts > 0){
        new Game(range,attempts);
        $('.gameSettings').style.display = "none";
        $('.game').style.display = "block";
    }

}

window.onload=function(){
    $("#play").addEventListener('click', gameSettings);
    $('.gameSettings').style.display = "block";
    $('.game').style.display = "none";
}

