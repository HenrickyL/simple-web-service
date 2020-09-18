const mongoose = require("mongoose")

const loginSchema = new mongoose.Schema({
    username: {
        type: String,
        required:true
    },
    password:{
        type:String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    // firstName:{
    //     type: String,
    //     required: true
    // },
    // lastName:{
    //     type: String,
    //     required: true
    // },
    // dateBirth:{
    //     type: Date,
    //     required: true
    // },
    // phone:{
    //     type: String,
    //     required: true
    // },
    createAt:{
        type: Date,
        default: Date.now
    },
})
mongoose.model('login',loginSchema);
console.log('create')
// module.exports =  login