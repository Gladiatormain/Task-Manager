const mongoose=require('mongoose');
const TodoSchema = new mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    data: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const todo = mongoose.model('todo', TodoSchema);

module.exports=todo