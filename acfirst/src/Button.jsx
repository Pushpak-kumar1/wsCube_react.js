import React from 'react'

function doSomething(event) {
    console.log("Hello!");
}

export default function Button() {
  return (
    <div>
        <button onClick={doSomething}>Click me</button>
    </div>
  )
}
