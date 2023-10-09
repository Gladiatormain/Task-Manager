const user = require('../model/user_model')
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/utils');
const Register = async (req, res) => {
    const { name, email, phone, password, cpassword } = req.body
    //fetching from db
    if (!name || !email || !phone || !password || !cpassword) {
        return res.status(400).json({ error: "Please fill the data" })
    }
    try {
        const userexist = await user.findOne({ email: email })
        if (userexist) {
            return res.status(400).json({ error: "email Already Exist" })

        }
        else if (password !== cpassword) {
            return res.status(400).json({ error: " Passwords are not matching" })
        }
        else {
            const hashpassword = await bcrypt.hash(req.body.password, 12);
            const hashcpassword = await bcrypt.hash(req.body.cpassword, 12)
            const newuser = new user({ name: name, email: email, phone: phone, password: hashpassword, cpassword: hashcpassword });
            const registred = await newuser.save();
            if (registred) {
                return res.status(200).json({ error: "User Registered Succesfully" })
            } else {
                return res.status(400).json({ error: " Some error Occured" })
            }
        }
    }
    catch (err) {
        res.status(400).json({ message: err })
    }
}
const Login = async (req, res) => {
    let token;
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
            token = generateToken(email)
            // localStorage.setItem('jwttoken',token)
            res.cookie("jwttoken", token);
            // localStorage.setItem("jus","slm")
            res.json({ msg: "user loggedin succesfully", token: token })
        }
    } else {
        res.status(404).json({ msg: "Invalid Credentials" })
    }
}

const Logout = (req, res) => {
    res.status(200).json({ msg: "Logout Succesfully" })
}

// const multerStorage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         console.log(file);
//         cb(null, "../../public");
//     },
//     filename: (req, file, cb) => {
//         console.log(file);
//         const ext = file.mimetype.split("/")[1];
//         // console.log(ext);
//         cb(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`);
//     },
// });
// const upload = multer({
//     storage: multerStorage
// });

const updateprofile = async (req, res) => {
    const { username, name, phone, dob, profileimg } = req.body.update
    try {
        const responsee = await user.updateMany({ email: req.userid }, {
            $set: {
                username:username,
                name: name,
                phone:phone,
                profileimg:profileimg,
                dob:dob
            }
        })
        if (responsee) {
           return res.status(200).json({ msg: "Data Updated" })
        }
    } catch (error) {
        res.status(404).json({ msg: "Invalid Credentials" })
    }
}

const GetProfileDetails=async (req,res)=>{
    const userexist = await user.findOne({ email: req.userid })
    return res.status(200).json({ msg: "Data Updated",userexist:userexist })

}

module.exports = { Register, Login, Logout, updateprofile ,GetProfileDetails};