var currentGame;

function getElement(item){
    return document.querySelector(item);
}

class Game{
    #maxAttempts;
    #range;
    #attempt;
    #text;
    #num;
    constructor(range,attempts){
        this.#range = range;
        this.#maxAttempts = attempts;
        this.#num;
        this.init();
    }
    init(){
        this.#attempt = 0;
        this.#num = Math.floor(Math.random() * this.#range.value);
    }
    check(userNum) {
        if(this.#attempt >= 0 && this.#attempt < this.#maxAttempts.value){
            this.#attempt++;
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

    get getAttempts(){

        return this.#maxAttempts.value - this.#attempt;
    }
}

function mostrarPantalla(texto){
   getElement('#gameInfo').innerHTML = texto;
}

function gameSettings(){
    let range = getElement('#range').value;
    let attempts = getElement('#attempts').value;

    if(range > 0 && attempts > 0){
        startGame();
    }
}

function startGame(){
    currentGame = new Game(range,attempts);
    getElement('.gameSettings').style.display = "none";
    getElement('.game').style.display = "block";
    getElement('#attText').innerHTML = currentGame.getAttempts;
    getElement('#gameInfo').innerHTML = "";
    getElement('#attText').innerHTML = currentGame.getAttempts;
    getElement('#userNum').value = "";
}

function checkUserNum(){
    currentGame.check(getElement('#userNum').value);
    if(currentGame.getAttempts > 0)
        getElement('#attText').innerHTML = currentGame.getAttempts;
}

function restart(){
    currentGame.init();
    startGame();
}

function back(){
    getElement('.gameSettings').style.display = "block";
    getElement('.game').style.display = "none";
}

window.onload=function(){
    getElement('.gameSettings').style.display = "block";
    getElement('.game').style.display = "none";
    getElement("#play").addEventListener('click', gameSettings);
    getElement("#check").addEventListener('click', checkUserNum);
    getElement("#restart").addEventListener('click', restart);
    getElement("#back").addEventListener('click', back);
}

