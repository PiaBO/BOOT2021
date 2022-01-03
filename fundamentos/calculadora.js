function tecla(num){
    document.getElementById("result").value+=num;
}

function resolver(){
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}

function limpiar()
{
    document.getElementById("result").value = "";
}