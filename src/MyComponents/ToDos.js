import React from 'react';
import {ToDoItem} from "./ToDoItem";

export const ToDos = (props) => {
    return (
        <div className="container">
            <h3 className="my-3">TO DO LIST</h3>
            {props.todos.length===0?"No Todos to Display":
            props.todos.map((todos)=>{
                return  (
                <ToDoItem todo={todos} key={todos.sno} onDelete={props.onDelete}/> 
                );// when we render elements in ui using map function we need to give every element a unique key 
            })}        
        </div>
    )
}

