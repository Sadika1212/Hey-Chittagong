const mongoose = require('mongoose')
const validator = require('validator')

const blogSchema = mongoose.Schema({
    name:{
        type:String,
        minLength: 2,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    article:{
        type: String,
        // required: true,
        minLength:5
    },
    image:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
})

//we need a collection
const blogdata = mongoose.model("Blogdata", blogSchema)
module.exports = blogdata