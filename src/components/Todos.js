import React from 'react'
import TodoItem from "./TodoItem"

export const Todos = (props) => {
  let myStyle={
    minHeight:"100vh",
    margin:"50px auto"
  }
  return (
    <div className="container" style={myStyle}>
         <h3 className="text-center my-3">Todos List</h3>
         {props.todos.length===0?<h4 className="text-center my-2 text-danger">No Todos To Display!!!<br className="my-3"/>ADD ONE!</h4>:
         props.todos.map((todo)=>{
           return (<>
            <div className="text-center my-5">

           <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
            </div>
           </>)
         })}
         

    </div>
  )
}
