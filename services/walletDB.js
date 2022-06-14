const model = require('../models/model')

async function walletdbFind(data){
    try{
        return model.coinModel.find(data).exec()
    }catch(err) {throw err}
}

async function walletdbUpdate(data){
    try{
        return model.coinModel.updateOne(data,data,{upsert : true}).exec()
    }catch(err) {throw err}
}

module.exports = {
    walletdbFind,
    walletdbUpdate
}