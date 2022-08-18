mongoose = require('mongoose')

const hotelSchema = mongoose.Schema({
    image:{
        type: String
    },
    name:{
        type:String
    },
    rating:{
        type:String
    },
    location:{
        type:String
    },
    link:{
        type:String
    }

})

//we need a collection
const HotelData = mongoose.model("HotelData", hotelSchema)
module.exports = HotelData