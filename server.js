// if(process.env.NODE_ENV !== 'production') {
//     require('dotenv').parse()
// }

const express = require('express')
const app = express()

const indexRouter = require("./routes/index")

const expressLayout = require("express-ejs-layouts")

const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/asmara-library")
// const db = mongoose.connection
// db.on("error", error => console.error(error))
// db.once("open", () => console.log("connected to mongodb"))

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.set("layout", "layouts/layout")
app.use(expressLayout)
app.use(express.static("public"))
app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)