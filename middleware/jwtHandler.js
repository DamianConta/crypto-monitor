const serviciosJwt = require('../services/servicios.jwt')

module.exports ={
    requestToken(req, res, next){
        const bearerHeader =  req.headers['authorization'];
        if(typeof bearerHeader !== 'undefined'){
            const bearerToken = bearerHeader.split(" ")[1];
            req.token  = bearerToken;
            try{
                if (serviciosJwt.verifyToken(req.token)) next()
            }catch(err){
                throw Error("Token inválido")
            }
        }else{
            throw new Error("Sin Token")
        }
    }
}
