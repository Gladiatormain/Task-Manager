const express = require("express")
const user = require('../model/user_model')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt');
const router2 = express.Router()
router2.use(cookieParser())
router2.post('/login', async (req, res) => {
    console.log("post 8000");
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ msg: "Please fill the data" })
    }
    const userlogin = await user.findOne({ email: email });
    if (userlogin) {
        const ismatch = await bcrypt.compare(password, userlogin.password);
        if (!ismatch) {
            res.status(400).json({ msg: " Invalid Credentials" });
        } else {
            res.cookie("Token","Tokensaved");
            // localStorage.setItem("jus","slm")
            res.json({ msg: "user loggedin succesfully" })
        
        }
    } else {
        res.status(404).json({ msg: "Invalid Credentials" })
    }
})

module.exports=router2;