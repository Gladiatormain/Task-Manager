const jwt = require('jsonwebtoken')
const generateToken =  (email) => {
    return jwt.sign({email}, 'secret123', {
      expiresIn: '1200s'
    })
  }

module.exports={
    generateToken
}