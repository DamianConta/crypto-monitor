const serviciosJwt = require('../services/servicios.jwt')
const db = require('../services/usersDB')


module.exports = {
    async postLogin(req,res){
              try{
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
                            token? res.status(200).json(response) : res.status(401).json("error");
                        } else{
                            res.status(401).json({token:"",login:"Error"})
                        }
                    })
            }catch(err) {throw new Error("Error en login")};
         
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
