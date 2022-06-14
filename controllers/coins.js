const fetch = require('node-fetch')
const walletdb = require('../services/walletDB')
const usersdb = require('../services/usersDB')
  
async function getList(req,res){
    try{
    await fetch('https://api.coingecko.com/api/v3/coins/list')
        .then(response => response.json())
        .then(data => {
            let lista = JSON.parse(JSON.stringify(data))
            res.render('coins', { lista : lista });
        }); 
    }catch(err) {throw new Error("Error al obtener lista coingecko")}
}

async function getWallet(req,res){
    try{
        await usersdb.userdbFind({user : req.body.user, password: req.body.password})
        .then(data=>{
            if (data.length !== 0){
                walletdb.walletdbFind({user_id : data[0]._doc._id})
                .then(dataWallet=>{
                    const lista = JSON.parse(JSON.stringify(dataWallet))
                    res.render('wallet', { lista : lista });
                })
            }
        })
    }catch(err) {throw new Error("Error wallet")}
}

async function postSaveCoin(req,res){
    try{
    const obj = JSON.parse(JSON.stringify(req.body))  
    await usersdb.userdbFind({user : obj.Usuario, password : obj.Password})
    .then(result=>{
        if (!(result.length==0)){
            const data = {id : obj.Id, name: obj.Name, symbol: obj.Symbol, user_id: result[0]._doc._id}
            walletdb.walletdbUpdate(data)
            .then(result=>{
                if (result.upsertedCount==0) res.json({registro : "Existente"})
                else res.json({registro : "Exitoso"})
            })
        }
    })
    }catch(err) {throw new Error("Error al guardar en wallet")}
}

module.exports = {
    getList,
    getWallet,
    postSaveCoin
}