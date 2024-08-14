import React from 'react'
import { useState } from 'react'

export default function LikeButton() {

    const [isLiked, setIsLiked] = useState(false);

    let toggleLike=()=> {
        setIsLiked(!isLiked);
    };

  return (
    <>
      <p onClick={toggleLike} >
        {
            isLiked ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>
        }
      </p>
    </>
  )
}
