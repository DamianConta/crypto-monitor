module.exports = {
    error404(req,res){
        res.status(404).render('404', {title: "Recurso no encontrado"});
    },

    errorHandler(err,req,res,next){
        console.log(`error del tipo :${err}`)
        res.status(500).end()
    }
}