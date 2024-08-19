import React from 'react'
import { useState } from 'react';

export default function Form() {
    
    let [formData, setFormData] = useState( {
        fullName : "",
        userName : ""
    })

    // let handleNameChange = (event) => {
    //     setFullName(event.target.value);
    // };


    // let handleUserName = (event) => {
    //     setUserName(event.target.value);
    // };

    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let newValue = event.target.value;

        setFormData( (currData) => {
            currData[fieldName] = newValue;     // computed porperty name
            return {...currData}
        });
    };

    let handleSubmit = ( (event) => {
        event.preventDefault();
        // console.log(formData);
        setFormData({
            fullName : "",
            userName : ""
        })
    })

  return (
    <div>
        <form onSubmit={handleSubmit}>
           <label htmlFor="fullName"> Full Name </label> 
            <input 
              placeholder="enter full name" 
              type="text"
              value={formData.fullName} 
              onChange={handleInputChange} 
              id="fullName"
              name="fullName"
            />
            <br></br>
            <br></br>

            <label htmlFor="userName"> User Name </label> 
            <input 
              placeholder="enter username" 
              type="text"
              value={formData.userName} 
              onChange={handleInputChange} 
              id="userName"
              name="userName"
            />
            <br></br>
            <br></br>

            <button>Submit</button>
        </form>
    </div>
  )
}
