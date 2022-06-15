const serviciosJwt = require('../services/servicios.jwt')
const db = require('../services/usersDB')

module.exports = {
    
    async postLogin(req,res){
        
            await db.userdbFind({user : req.body.user,
                password : req.body.password
            })
            .then(result=>{
                if (!(result.length==0)){
                    token = serviciosJwt.getToken(req.body);
                    const response = {
                        token : token,
                        login : "ok"                   
                    }
                    token? res.status(200).json(response) : console.log('Error token');
                } else{
                    res.status(401).json({token:"",login:"Error"})
                }
            })
        
    },
    async postSignUp(req,res){
        try{
        await db.userdbUpdate({user: req.body.user,
                password: req.body.password
            }).then(result=>{
                if (result.upsertedCount==0) res.status(401).json({registro : "Existente"})
                else res.status(200).json({registro : "Exitoso"});
            })
        }catch(err) {
            res.status(500).end()
            throw new Error("Error al registrar usuario")
        }
    } 
}
