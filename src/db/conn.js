
const mongoose = require("mongoose")


const DB= 'mongodb+srv://sadika:sadika12@cluster0.8ngdv.mongodb.net/HeyChittagong?retryWrites=true&w=majority'
 //creating database
//  mongoose.connect("mongodb://localhost:27017/HeyChittagong",{
//     useCreateIndex:true,
//     useNewUrlParser:true,
//     useUnifiedTopology:true
//  }).then(()=>{
//      console.log("connection successfull");
//  }).catch((error)=>{
//      console.log(error);
//  })
mongoose.connect(DB, {
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useFindAndModify:false
}).then(()=>{
    console.log("connection successfull");
}).catch((error)=>{
    console.log(error);
})