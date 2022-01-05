
function validate(e){
    e.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const date = document.getElementById("birthdate");
    const pwd = document.getElementById("pwd");
    const pwd2 = document.getElementById("pwd2");
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name.value === ""){
        alert("Escriba su nombre");
        name.focus();
        return false;
    }
    if(email.value === ""){
        alert("Escriba su email");
        email.focus();
        return false;
    }else if(!re.test(email.value)) {
        alert("email incorrecto");
        email.focus();
        return false;
    }
    if(date.value === ""){
        alert("Escriba su fecha de nacimiento");
        date.focus();
        return false;        
    }else if(new Date().getFullYear() - new Date(date.value).getFullYear() < 18){
        alert("No eres mayor de edad");
        date.focus();
        return false;        
    }
    if(pwd.value === "" || pwd2.value ===""){
        alert("Escriba la contraseña");
        pwd.focus();
        return false;        
    }else if(pwd.value.length <6){
        alert("La contraseña tiene que tener mas de 6 caracteres");
        pwd.focus();
        return false;        
    }else if(pwd.value == pwd2.value){
        alert("Las contraseñas no coinciden");
        pwd.focus();
        return false;         
    }

}
