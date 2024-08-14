
import React from 'react'
import "./Lottery.css";
import { useState } from 'react'
import { genTicket, sum } from './helper';
import Ticket from './Ticket';


export default function Lottery( {n, winningSum} ) {

    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = sum(ticket) === winningSum;

    let buyTicket = () => {
        setTicket(genTicket(n));
    }

  return (
    <>
      <h1> Lottery Game </h1>
    <Ticket ticket={ticket} />

    <button onClick={buyTicket}> Buy New Ticket </button>
    <h3>{isWinning && "Congratulation, you won!"}</h3>
    </>
  );
}