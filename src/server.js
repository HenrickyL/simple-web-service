// import express from 'express'
const express = require("express")
const mongoose = require("mongoose")





//express
const app = express()
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended : true }))


//nunjucks



//mongoose
mongoose.connect(
    'mongodb://localhost:27017/nodeAtv',  
    {useNewUrlParser:true,useUnifiedTopology: true}
    )

require('./models/login.js')
const login = mongoose.model('login')



//desisti da ideia de rotas "externas"
// const routes = require('./routes')
// app.use('/',routes)
//motor para rendereizar html via express
const nunjucks = require('nunjucks')
nunjucks.configure("./src/views",{ 
    express: app,
    noCache:true,
    autoescape: true
})
app.use(express.static("public"))


//controlador de logins (db)
const loginController = require('./controllers/loginController')



app.get('/',(req,res)=>{
    return res.render('sign-in.html',{added:null})
    
})
app.get('/sign-in',(req,res)=>{
    return res.render('sign-in.html',{added:null})
})
app.get('/log-in',(req,res)=>{
    return res.render('log-in.html')
})
app.post('/register',loginController.signIn)

app.post('/login',loginController.login)

app.get('/api/users',loginController.index)


app.listen(9999)