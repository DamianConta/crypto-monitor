
btnLogin.addEventListener("click",postLogin)
login.addEventListener("click",showLogin)


function showLogin(e){
    e.preventDefault();
    formRegistro.style.display = 'none';
    formLogin.style.display = 'block';
    document.forms["formRegister"]["user"].value=""
    document.forms["formRegister"]["password"].value="" 
    section.innerHTML="";
    section.style.display="block";
}

function postLogin(e){
    e.preventDefault();
    section.innerHTML="";
    let form_data = new FormData(formLogin);
    let form_str = new URLSearchParams(form_data).toString(); 

    
    fetch('./v1/users/login',{
            method : 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: form_str
        }).then(response => {
            return response.text()})
        .then(data =>{
            const respObj = JSON.parse(data);
            localStorage.setItem("Token",respObj.token)
            localStorage.setItem("Usuario",document.forms["formLogin"]["user"].value)
            localStorage.setItem("Password",document.forms["formLogin"]["password"].value)

            if (respObj.login=="Error") {
                etiqueta.textContent="Usuario Nuevo, debe registrarse!"
                formRegistro.style.display = 'block';
                formLogin.style.display='none';
                document.forms["formLogin"]["user"].value=""
                document.forms["formLogin"]["password"].value=""  
            } else {
                etiqueta.innerHTML=`<b>Bienvenido/a :  ${document.forms["formLogin"]["user"].value}<b>`
                formLogin.style.display = 'none';
            };
  
        });
}
