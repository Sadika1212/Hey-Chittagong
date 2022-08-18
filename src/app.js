const express = require("express");
const mongoose = require("mongoose")
const path = require("path")
const exphbs = require("express-handlebars");
const hbs = require("hbs");
require("./db/conn")
const Contactdata = require("./models/userdata");
const RestData = require("./models/restdata");
const Blogdata = require("./models/blogdata");
const BankData = require("./models/bankdata");
const HostData = require("./models/hosdata");
const HotelData = require("./models/hoteldata");


const app = express();
const port = process.env.PORT || 80

//setting the path
const staticpath = path.join(__dirname, "../public")
const templatepath = path.join(__dirname, "../templates/views")
const partialpath = path.join(__dirname, "../templates/partials")

//middleware
app.use('/cs', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")))
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")))
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")))

app.use(express.urlencoded({ extended: false }))
app.use(express.static(staticpath))



app.set("view engine", "hbs")

app.set("views", templatepath)
hbs.registerPartials(partialpath)

//routing
app.get("/", (req, res) => {
    res.render("index")
})
app.get("/blog", (req, res) => {
    Blogdata.find({}, function (err, allblog) {
        res.render("blog", {
            blogList: allblog,
        });
    })
})
app.post("/contact", async (req, res) => {
    try {
        const userdata = new Contactdata(req.body)
        await userdata.save()
        res.status(201).render("index")
    } catch (error) {
        res.status(500).send(error)
    }
})
app.post("/blog", async (req, res) => {
    try {
        const blogdata = new Blogdata(req.body)
        await blogdata.save() 
        res.status(201).render("blog")
    } catch (error) {
        res.status(500).send(error)
    }

})

app.get("/restaurant", (req, res) => {
    var resultArray = []
    RestData.find({}, function (err, allrest) {
        res.render("restaurant", {
            restList: allrest
        });
    })
})
app.get("/bank", (req, res) => {
    var resultArray = []
    BankData.find({}, function (err, allbank) {
        res.render("bank", {
            bankList: allbank
        });
    })
 })
 app.get("/hospital", (req, res) => {
    var resultArray = []
    HostData.find({}, function (err, allhost) {
        res.render("hospital", {
            hospitalList: allhost
        });
    })

})
app.get("/hotel", (req, res) => {
    var resultArray = []
    HotelData.find({}, function (err, allhotel) {
        res.render("hotel", {
            hotelList: allhotel
        });
    })
    
})
app.get("/emcon", (req, res) => {
    res.render("emcon")  
})

app.get("/tour", (req, res) => {
    res.render("tour")  
})
app.get("/place", (req, res) => {
    res.render("place")  
})
app.get("/blogs", (req, res) => {
    res.render("blogs")  

})
app.get("/contact", (req, res) => {
    res.render("contact")
})
app.get("/trans", (req, res) => {
    res.render("transport")
})


//server Create
app.listen(port, () => {
    console.log(`server is running at port ${port}`)
})