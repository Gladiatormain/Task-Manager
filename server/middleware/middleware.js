const jwt = require('jsonwebtoken')
const middleware = (req,res,next)=>{
    try {
        const token=req.headers.token;
        const decode=jwt.verify(token,"secret123");
        req.userid=decode.email
        next();
    } catch (error) {
        return res.status(400).json({ error: "Unauthorized Token" })
    }
}
module.exports=middleware