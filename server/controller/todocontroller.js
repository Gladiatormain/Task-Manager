const todo = require('../model/model');
const addnewtodo =async (req, res) => {

    try {
        // console.log(req.headers.token)
        const newTodo = await todo.create({
            userid:req.userid,
            data: req.body.data,
            createdAt: Date.now()
        })

        await newTodo.save();

        return res.status(200).json(newTodo);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

const getAlltodos = async (req,res) => {
    try {
      const todos= await todo.find({userid:req.userid}).sort({'createdAt':-1})
        return res.status(200).json(todos);

    } catch (error) {
        return res.status(500).json(error);
    }
}
const toggleTodoDone = async (req,res) => {
    try {
      const oldvalue= await todo.findById(req.params.id)
      const newvalue= await todo.findOneAndUpdate({_id:req.params.id},{
            done:!oldvalue.done
        })
        await newvalue.save()
        return res.status(200).json(newvalue);

    } catch (error) {
        return res.status(500).json(error);
    }
}

 const updateTodo = async (request, response) => {
    try {
        await todo.findOneAndUpdate(
            { _id: request.params.id },
            { data: request.body.data }
        )

        const todoo = await todo.findById(request.params.id);

        return response.status(200).json(todoo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}
 const deleteTodo = async (request, response) => {
    try {
        const todoo = await todo.findByIdAndDelete(request.params.id)
        return response.status(200).json(todoo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}




module.exports = {
    addnewtodo,
    getAlltodos,
    toggleTodoDone,
    updateTodo,
    deleteTodo
}