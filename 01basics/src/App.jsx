import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Container, TabContainer } from 'react-bootstrap';

function App() {
    let template = "let's play a game";
    let [count, setCount] = useState(1)  /* useState Hook bolte hai */

    let [pshow, setPshow] = useState(false)

    let [pstatus, setpstatus] = useState(false)

    let [modalStatus, setmodalStatus] = useState(false);


  
    if(pshow) {
      template = <>
        <button className='bg-[blue] p-[10px]' onClick={()=>setPshow(!pshow)}>
          Hide</button>
        <p>Welcome to WS</p>
      </>
    } else {
      template = <div>
         <button className='bg-[blue] p-[10px]' onClick={()=>setPshow(!pshow)}>
          Show</button>
      </div>
    }


  let displayData = () => {
    /*alert("Welcome to alerts") */
    setCount(count+1)
  }

  let addData=(a,b) => {
    console.log(a+b)
  }


  return (
    <>

    <div>
    <button className='en' onClick = { () => setmodalStatus(!modalStatus)}>
      Enquire now </button>

    <div className={`modalOverLay ${ modalStatus?`modalShow`:'' } ` }></div>
    <div className={`modalDiv ${ modalStatus?`showmodalDiv`:'' } ` }>
      <h3>Enquiry Now</h3>
    </div>
    </div>



    <input type={pstatus ? 'text' : 'password'}/> 
    <button onClick={ () => setpstatus(!pstatus) }>
      {pstatus ? 'Hide' : 'Show'}
    </button>
    <br />

    {template}
    <div>
      {count}
      <button
          className='bg-[red] p-[10px]' onClick={displayData}>
          Click me </button>

        <button
          className='bg-[red] p-[10px] mr-4' onClick={()=>addData(20, 25)}>
          Add Data </button>
    </div>
    </>
  )
}

export default App
