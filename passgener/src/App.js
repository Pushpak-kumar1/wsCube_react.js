import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { LC, NC, SC, UC } from './Data/PassChar';

function App() {

  let [uppercase, setUppercase] = useState(false)
  let [lowercase, setLowercase] = useState(false)
  let [numbercase, setNumbercase] = useState(false)
  let [symbolcase, setSymbolcase] = useState(false)

  let [passwordlen, setPasswordLen] = useState(10)
  let [fpass, setFpass] = useState('')

  let createPassword=()=> {
    let finalPass = '';
    let charSet = '';
    if (uppercase || lowercase || numbercase || symbolcase) {
        if (uppercase) charSet += UC;
        if (lowercase) charSet += LC;
        if (numbercase) charSet += NC;
        if (symbolcase) charSet += SC;

        for (let i=0; i<passwordlen; i++) {
          finalPass += charSet.charAt( Math.floor(Math.random()*charSet.length) )
        }
        setFpass(finalPass)

    } else {
      alert("Please select One checkbox")
    }
  }

  return (
   <>
   <div className='passwordBox'>
      <h2>Password Generator</h2>

      <div className='passwordBoxin'>
        <input type='text' value={fpass} readOnly/> <button>Copy</button>
      </div>

      <div className='passLength'>
        <label>Password length</label>
        <input type='number' max={20} min={10} value={passwordlen} onChange={(event)=>setPasswordLen(event.target.value)} />
      </div>

      <div className='passLength'>
        <label>Including uppercase letters</label>
        <input type='checkbox' checked={uppercase} onChange={()=> setUppercase(!uppercase)} />
      </div>

      <div className='passLength'>
        <label>Including lower Case</label>
        <input type='checkbox'  checked={lowercase} onChange={()=> setLowercase(!lowercase)} />
      </div>

      <div className='passLength'>
        <label>Including Numbers</label>
        <input type='checkbox'  checked={numbercase} onChange={()=> setNumbercase(!numbercase)} />
      </div>

      <div className='passLength'>
        <label>Including Symbols</label>
        <input type='checkbox'  checked={symbolcase} onChange={()=> setSymbolcase(!symbolcase)} />
      </div>

      <button className='btn' onClick={createPassword}>
        Generate Password
      </button>

   </div>
   </>
  );
}

export default App;
