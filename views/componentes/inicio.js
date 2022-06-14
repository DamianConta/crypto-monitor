const body = document.getElementById("body")
const formLogin = document.getElementById("formLogin")
const formRegistro = document.getElementById("formRegistro")
const coins = document.getElementById("coins")
const wallet = document.getElementById("wallet")
const login = document.getElementById("login")
const register = document.getElementById("register")
const section = document.getElementById("lista")
const etiqueta = document.getElementById("etiqueta")
const btnLogin = document.getElementById("btnLogin")
const btnRegistro = document.getElementById("btnRegistro")

function inicio(){
    localStorage.setItem("Token","");
    localStorage.setItem("Usuario","")
    localStorage.setItem("Password","")
    section.innerHTML="";
    formRegistro.style.display = 'none';
    formLogin.style.display = 'none';
    localStorage.setItem("section","")
}

inicio();
