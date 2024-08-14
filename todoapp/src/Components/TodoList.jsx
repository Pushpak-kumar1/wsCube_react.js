import React from 'react'

export default function(props) {
  return (
    <div>
        <li className='list-item'>
        {props.item}
        <span className='icons'>
        <i className="fa-solid fa-trash-can icon-delete" 
        onClick={e=>{
            props.deleteItem(props.index)
        }}></i>
        </span>
        </li>
    </div>
  )
}
