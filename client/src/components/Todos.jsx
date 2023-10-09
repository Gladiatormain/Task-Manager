import React from "react";
import { useEffect } from 'react'
import Tabs from './Tabs'
import Todoview from './TodoView'
const { getAlltodos } = require('../redux/actions/index')
const { useDispatch, useSelector } = require("react-redux")
export const Todos = () => {

    const dispatch = useDispatch();
    const todos=useSelector(state=>state.todos)
    const currenttab=useSelector(state=>state.currentab)

    useEffect(() => {
        dispatch(getAlltodos)
    }, [])

    const getTodos = () => {
      if (currenttab === "All Todos") {
          return todos;
      } else if (currenttab === "Active Todos") {
          return todos.filter(todo => !todo.done)
      } else if (currenttab ==="Done Todos") {
          return todos.filter(todo => todo.done)
      }
  }
    return (

      <article>
        <div className='todoview'>
          <Tabs currentTab={currenttab}/>
        </div>
        <ul>
            {
                getTodos().map(todo=>(
                   <Todoview key={todo.id} todo={todo}/>
                ))
            }
        </ul>
      </article>
    )
}