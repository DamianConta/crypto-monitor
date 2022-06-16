
function validateUser(req,res,next){

    let expReg = /[a-z0-9]{6,12}/g;
    
    if (expReg.test(req.body.user)) next()
    else {
        throw new Error('Formato de usuario inválido')
    }
}

module.exports = {
    validateUser
}