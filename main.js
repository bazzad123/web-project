const express = require("express");
const app = express();
const hbs = require("hbs");

const path = require("path")
// const hpath=path.join(__dirname,"../public")
// app.use(express.static(hpath));

const ppath = path.join(__dirname,"/parsel")
console.log(path.join(__dirname,"/parsel"))


app.set("view engine",'hbs')
hbs.registerPartials(ppath)


app.get("/",(req,res)=>{
   res.render("index")
})

app.get("/contact",(req,res)=>{
   res.render("contact")
})

app.get("/weather",(req,res)=>{
   res.render("weather")
})


app.get("/home",(req,res)=>{
    res.render("index")
})

app.get("/service",(req,res)=>{
    res.render("service")
})

app.listen(8000,()=>{
   console.log("donee");
})