
// AGenda was bht sare states ko create krne k bjaye objects bna le
import { useState } from 'react';
import React from 'react'

export default function LudoBoard() {

        let [moves, setmoves] = useState({blue: 0, yellow: 0, green: 0, red: 0});

            // original add. change nahi hota means objects vaisa he rahega
            // that's why we use spread jisse copy pass hogi alag alag jise vo re-render kraega
        let updateBlue = () => {
            moves.blue += 1;
            setmoves( {...moves} );  // console main run hoga but not render -> pura objects change krna pdta hai 
        }
        let updateYellow = () => {
            //moves.yellow += 1;
            setmoves( {...moves, yellow: moves.yellow + 1} );  
        }    
        let updateGreen = () => {
            setmoves( {...moves, green: moves.green + 1});
        }
        let updateRed = () => {
            setmoves( {...moves, red: moves.red + 1});
        }


  return (
    <div>
        <h1>Game Begins</h1>
        <div className='board'>
            <p> Blue moves = {moves.blue} </p>
            <button style={{backgroundColor: "blue"}} onClick={updateBlue}> + 1 </button>
            <p> Yellow moves = {moves.yellow}</p>
            <button style={{backgroundColor: "yellow", color: "black"}} onClick={updateYellow}> + 1 </button>
            <p> Green moves = {moves.green} </p>
            <button style={{backgroundColor: "green"}} onClick={updateGreen}> + 1 </button>
            <p> Red moves = {moves.red} </p>
            <button style={{backgroundColor: "red"}} onClick={updateRed}> + 1 </button>
        </div>
    </div>
  )
}
