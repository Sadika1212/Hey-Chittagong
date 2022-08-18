const mongoose = require('mongoose')

const hostSchema = mongoose.Schema({
    image:{
        type:String
    },
    name:{
        type:String
    },
    location:{
        type: String
    },
    link:{
        type: String
    }
})

//we need a collection
const HostData = mongoose.model("HostData", hostSchema)
module.exports = HostData