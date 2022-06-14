const model = require('../models/model')

async function userdbFind(data){
    try{
        return model.userModel.find(data).exec()
    }catch(err){throw err}

}

async function userdbUpdate(data){
    try{
        return model.userModel.updateOne(data,data,{upsert : true}).exec()
    }catch(err){throw err}
}

module.exports = {
    userdbFind,
    userdbUpdate
}

