const express = require('express')
const path = require('path')
const expHbs = require('express-handlebars')
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const app = express()

const hbs = expHbs.create({
    layoutsDir: "views/layouts",
    defaultLayout: "main",
    extname: "hbs",
    handlebars: allowInsecurePrototypeAccess({ handlebars: true })
})




const PORT = process.env.PORT || 1000

function start(){
    try{
        app.listen(PORT, ()=> {
            console.log("Server is running on", PORT)
        })
    } catch(e){
        console.log(e)
    }
}

start()