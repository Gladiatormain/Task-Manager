const express=require('express');
const cors=require('cors')
const app=express();
const router=require('./routes/routes')
const Connection=require('./db/db');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
app.use(cookieParser())

Connection()
app.use(cors())
app.use(express.json({limit:'50mb',extended:true}));
// app.use(bodyParser.json({limit:'50mb',extended:true}))
// app.use(bodyParser.urlencoded({parameterLimit:10000,limit:'500mb',extended:true}))
// app.use(bodyParser.text({limit:'200mb',extended:true}))


app.use('/',router)

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})