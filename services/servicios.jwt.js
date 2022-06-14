const jwt = require("jsonwebtoken");

module.exports = {

    getToken(data){
        try{
            return jwt.sign({data},process.env.JWTSECRETKEY,{ expiresIn: '1d' })
        }catch(err){throw err}
    },

    verifyToken(token){ 
        try{
            return jwt.verify(token, process.env.JWTSECRETKEY)
        }catch(err){throw err}
    }
}
