import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container, TabContainer } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0)
  

  let displayData = () => {
    alert("Welcome to alerts")
  }

  let addData=(a,b) => {
    console.log(a+b)
  }


  return (
    <>
      <button
        className='bg-[red] p-[10px] mr-4' onClick={()=>addData(20, 25)}>
        Add Data </button>

     <button
        className='bg-[red] p-[10px]' onClick={displayData}>
        Click me </button>
    </>

  )
}

export default App
