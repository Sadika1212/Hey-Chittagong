mongoose = require('mongoose')

const bankSchema = mongoose.Schema({
    image:{
        type: String
    },
    name:{
        type:String
    },
    type:{
        type:String
    },
    location:{
        type:String
    }

})

//we need a collection
const BankData = mongoose.model("BankData", bankSchema)
module.exports = BankData