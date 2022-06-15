wallet.addEventListener("click", getWallet)
section.addEventListener("click",selectCoin)


function selectCoin(e){
    let request = ((e.target.innerText).replaceAll(':','=')).replaceAll('||','&').replaceAll(' ','')
    request = request + '&Usuario='+formLogin["user"].value + '&Password=' +formLogin["password"].value
    var resultado = window.confirm('¿Deseas guardar en tu Wallet?');
    if (resultado === true) {
        window.alert('Exito');
        fetch('./v1/coins/savecoin',{
            method : 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Authorization': 'Bearer '+ localStorage.getItem("Token"),
            "Access-Control-Allow-Origin" : "*",  
            "Access-Control-Allow-Credentials" : true  
            },
            body: request
        }).then(response => {
            return response.text()})
        .then(data =>{console.log(data)})
    } else { 
        window.alert('No se guardo la cryptomoneda en tu Wallet');
    }
}

function getWallet(e){
    e.preventDefault();
    section.innerHTML="";
    fetch('./v1/coins/wallet/list',{
        method : 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Authorization': 'Bearer '+ localStorage.getItem("Token"),
        "Access-Control-Allow-Origin" : "*",  
        "Access-Control-Allow-Credentials" : true  
        },
        body : "user=" + formLogin['user'].value +"&password=" + formLogin['password'].value
    }).then(response => {
        return response.text()})
    .then(data =>{
        if (data!=="Forbidden") section.innerHTML=data;
    });
}
