import { toggleTodo,updateTodo,deleteTodo } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import React from "react";
import Tabs from "./Tabs";
const Todoview = ({ todo }) => {
    const [editing, setediting] = useState(false)
    const [text,setText]=useState(todo.data)
    const dispatch = useDispatch()
    const togglefunc = (id) => {
        dispatch(toggleTodo(id))
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        setediting(prevState => !prevState);
        dispatch(updateTodo(todo._id, text))
    }
    const DeleteTodo=(id)=>{
        dispatch(deleteTodo(id))
    }

    return (
        <li className="task" onClick={() => togglefunc(todo._id)} style={{
            textDecoration: todo.done ? 'line-through' : '',
            color: todo.done ? '#e02832' : '#34495e'
        }}>
            <span style={{ display: editing ? 'none' : '' }}>
                {todo.data}
            </span>
            <form
                style={{ display: editing ? 'inline' : 'none' }}
                onSubmit={onFormSubmit}
            >
                <input
                    type="text"
                    value={text}
                    className="edit-todo"
                    onChange={(e) => setText(e.target.value)}
                />
            </form>
            <span className="icon">
                <i className="fas fa-trash" onClick={() => DeleteTodo(todo._id)}></i>
            </span>
            <span className="icon">
                <i className="fas fa-pen" onClick={() => setediting(prev => !prev)}></i>
            </span>
        </li>
    )
}
export default Todoview