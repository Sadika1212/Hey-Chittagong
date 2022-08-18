const mongoose = require('mongoose')

const restSchema = mongoose.Schema({
    name:{
        type:String
    },
    location:{
        type:String
    },
    image:{
        type: String
    },
    link:{
        type: String
    },
    type:{
        type: String
    }
})

//we need a collection
const RestData = mongoose.model("RestData", restSchema)
module.exports = RestData