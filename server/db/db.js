const mongoose=require("mongoose");


const Connection = () => {
    const MONGODB_URI = "mongodb+srv://admin:admin@todos.lvgme8g.mongodb.net/?retryWrites=true&w=majority";
    const URI="mongodb+srv://admin:admin@todos.lvgme8g.mongodb.net/?retryWrites=true&w=majority"
    const ak="mongodb+srv://admin:admin@todos.lvgme8g.mongodb.net/?retryWrites=true&w=majority"
    mongoose.connect(ak, { useNewUrlParser: true });
    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })
    mongoose.connection.on('error', (err) => {
        console.log('Error while connecting with the database ', err.message);
    })
}

module.exports=Connection