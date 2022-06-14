const mongoose = require('mongoose')
const Schema = mongoose.Schema

const USERS = 'users';
const COINS = 'wallet';

const userSchema = new Schema({
    user: String,
    password: String
})

const coinSchema = new Schema({
    id : String,
    name : String,
    symbol : String,
    user_id :  {type: Schema.Types.ObjectId, ref : USERS}    
})

const userModel = mongoose.model(USERS, userSchema)
const coinModel = mongoose.model(COINS, coinSchema)

module.exports = { 
    userModel,
    coinModel
}
