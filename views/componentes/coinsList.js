coins.addEventListener("click", listarCoins)


function listarCoins(e){
    e.preventDefault();
    section.innerHTML="<b>Cargando........</b>";
    if(localStorage.getItem("section")===""){
        fetch('./v1/coins/list',{
            method : 'GET',
            headers: {
            'Authorization': 'Bearer '+ localStorage.getItem("Token"),
            "Access-Control-Allow-Origin" : "*",  
            "Access-Control-Allow-Credentials" : true              
            },
        }).then(response => {
            return response.text()})
        .then(data =>{
            if (data!=="Forbidden") {
                section.innerHTML=data;
                localStorage.setItem("section",data)
            }
        });
}else section.innerHTML=localStorage.getItem("section")
}