import React from 'react'
import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);  // initialization -> ignored in re-render

    const addValue =() => {
    // setCounter(counter + 1);    // if we do like this then it'll remain same
    // setCounter(counter + 1);

    // Concept of Updation as callBack
      setCounter(currCount = () => { // to increse the value at certain times
        return currCount + 1;
      });
      setCounter(currCount = () => {
        return currCount + 1;
      });
  }

  const decValue =() => {
    setCounter(counter - 1);
  }

  return (
    <>
      <h3> Count Value : {counter} </h3>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <br/>
      <button onClick={decValue}>DEC Value</button>
    </>
  )
}
