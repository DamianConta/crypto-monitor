 
 function indice(req,res){
        res.status(200).sendFile(__dirname + '../views/index.html')
    }

module.exports = {
    indice
}
