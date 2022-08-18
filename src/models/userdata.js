const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        minLength: 2
    },
    email:{
        type: String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    message:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
})

//we need a collection
const Contactdata = mongoose.model("Contactdata", userSchema)
module.exports = Contactdata