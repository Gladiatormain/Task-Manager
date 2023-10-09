const mongoose = require("mongoose");
// const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String
    },
    profileimg: {
        type:String
    },
    dob:{
        type:String
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    }
})

const user = mongoose.model('user', userSchema);  //1st argument is name of collection 2nd is name of schema
module.exports = user;