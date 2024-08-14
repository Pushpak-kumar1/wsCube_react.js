
import React from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TodoApp() {

    let [todo, setTodo] = useState([ { task: "Sample-task", id: uuidv4() } ]);
    let addNewTask = () => {
        // setTodo([...todo, {task: newTodo, id: uuidv4()} ]);
        // setNewTodo("");
        setTodo( (prevTodo) => {
            return [...prevTodo, { task: newTodo, id: uuidv4() }];
        });
        setNewTodo("");
    };


    let [newTodo, setNewTodo] = useState("");
    let updateTodoValue=(event) => {
       setNewTodo(event.target.value);
    }

    // Through using filter method
    let deleteTodo = (id) => {
        setTodo((prevTodo) => todo.filter( (prevTodo) => prevTodo.id != id));
    };


  return (
    <>
    <input 
        placeholder='add a task'
        value={newTodo} 
        onChange={updateTodoValue} 
    ></input>
    <br></br>
    <button onClick={addNewTask}> ADD </button>
    <br></br>
    <br></br>

    <hr></hr>
    <h3>TODO TASKS</h3>
    <ul>
        {
            todo.map( (kaam) => (
            <li key={kaam.id}> 
                <span> {kaam.task} </span>
                &nbsp; &nbsp; &nbsp;
                <button onClick={() => deleteTodo(kaam.id)}>Delete</button>
            </li>
            )
        )}
    </ul>
    </>
  )
}
