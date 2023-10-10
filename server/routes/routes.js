const express = require('express')
const cookies = require('cookie-parser')
const router = express.Router()
const { addnewtodo, getAlltodos, toggleTodoDone, updateTodo, deleteTodo } = require('../controller/todocontroller')
const { Register, Login, Logout, updateprofile,GetProfileDetails } = require('../controller/usercontroller');
const middleware = require('../middleware/middleware');
const multer = require('multer')

router.use(cookies())
router.post('/addtodo', middleware, addnewtodo)
router.get('/addtodo', middleware, getAlltodos)
router.get('/addtodo/:id', middleware, toggleTodoDone)
router.put('/addtodo/:id', middleware, updateTodo);
router.delete('/todos/:id', middleware, deleteTodo);



router.post('/register', Register)
router.post('/login', Login)
router.get('/logout',Logout)
module.exports = router
