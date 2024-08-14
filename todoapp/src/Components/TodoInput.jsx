
import React, { useState } from 'react';
import TodoInput from './TodoList'

export default function TodoInput(props) {
    let [inputText, setInputText] = useState('');

  return (
    <div className='input-container'>
        <input 
            type="text" 
            className="input-box-todo" 
            placeholder="enter your todo"
            value={inputText}
            onChange={(e)=> {
                setInputText(e.target.value);
            }} />

            <button className='add-btn' 
            onClick={ ()=> {
                props.addList(inputText) }}>
            +</button>
        <div></div>
    </div>
  )
}
