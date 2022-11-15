import React from 'react'

export const ToDoItem = ({todo,onDelete}) => {// to do is a javascript object,it is called destructuring ie.using individual things instead of props
    return (
        <div className="my-3">
            <h5>{todo.title}</h5>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-outline-danger" onClick={()=>onDelete(todo)}>Delete</button>
            <hr/>
            {/* function vs function() ,in first we are passing in second we are calling;  so use onClick={()=>function(todo)} for passing function with arguments,otherwise it will be called at rendering */}
        </div>
    )
}
