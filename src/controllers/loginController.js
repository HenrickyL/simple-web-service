const mongoose = require("mongoose")

const login = mongoose.model('login')

module.exports = {
    async index(req,res){
        const logins = await login.find();
        return res.send(logins)
    },
    async signIn(req,res){
        try {
            let user = await login.findOne({email:req.body.email, username:req.body.username})
            console.log(user)
            if(!user){
                const created = await login.create(req.body)
                return res.render('sign-in.html',{added:true})
            }else{
                return res.render('sign-in.html',{added:false})
            }
            
            // return res.redirect(301,`/ok`)
        } catch (error) {
            console.log(error)
            // return res.redirect(301,`/err`)
            return res.send("error:",error)
        }
    },
    async login(req,res){
        try {
            let user = await login.findOne({username:req.body.username,password:req.body.password})
            console.log(user)
            if(user){
                let allusers = await login.find()
                return res.render('users.html',{user:user,users:allusers})
            }else{
                return res.render('log-in.html',{error:true})
            }
        } catch (error) {
            console.log(error)
            // return res.redirect(301,`/err`)
            return res.send("error:",error)
        }
    },
    async compare(_username, _password){
        const logins = await login.findOne({
            username: _username,
            password:_password
        })
        return logins
    },
    async remove(_username){
        try {
        const logins = await login.deleteOne({
            username:_username
        })
            
        } catch (error) {
            console.log(error)
        }
    },
    async getUser(){
        return await login.find();
    }
}