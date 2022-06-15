btnRegistro.addEventListener("click",postRegistro) 
register.addEventListener("click",showRegister)


function showRegister(e){
    e.preventDefault();
    formRegistro.style.display = 'block';
    formLogin.style.display = 'none';
    section.innerHTML="";
}

function postRegistro(e){
    localStorage.setItem("Token","");
    localStorage.setItem("Usuario","")
    localStorage.setItem("Password","")
    section.innerHTML="";
    e.preventDefault();
    let form_data = new FormData(formRegistro);
    let form_str = new URLSearchParams(form_data).toString(); 
    
    fetch('./v1/users/sign-up',{
            method : 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: form_str
        }).then(response => {
            return response.text()})
        .then(data =>{
            const respObj = JSON.parse(data);
            if (respObj.registro=="Exitoso") {
                etiqueta.textContent="Usuario registrado con exito!"
                formRegistro.style.display = 'none';
                formLogin.style.display = 'block';
            } else etiqueta.innerHTML="Usuario existente, modificar el nombre de usuario!"; 
        });
}
