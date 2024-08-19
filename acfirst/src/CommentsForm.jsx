
import React from 'react'
import { useState } from 'react'

export default function CommentsForm() {

    let [formData, setFormData] = useState({
        username : "",
        remarks : "",
        rating : 5,
    })

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return {...currData, [event.target.name] : event.target.value};
        });
    };

    let handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
        
        setFormData({
            username : "",
            remarks : "",
            rating : 5,
        })
    }


  return (
    <div>
        <h2>Give a Comment</h2>
        <form onSubmit={handleSubmit}>

            <label htmlFor='username'>Username</label>
            <input
              placeholder='username'
              type="text"
              value={formData.username}
              id="username"
              name="username"
              onChange={handleInputChange}
            />
            <br></br> <br></br>

            <label htmlFor='remarks'>Remarks</label>
            <textarea 
               placeholder='add remarks'
               value={formData.remarks}
               id="remarks"
               name="remarks"
               onChange={handleInputChange}
               >Remarks</textarea>
            <br></br> <br></br>

            <label htmlFor='rating'>Ratings</label>
            <input
              placeholder='rating'
              type="number"
              value={formData.rating}
              id="rating"
              name="rating"
              onChange={handleInputChange}
            />
            <br></br> <br></br>

            <button>Add Comment</button>
        </form>
    </div>
  )
}
