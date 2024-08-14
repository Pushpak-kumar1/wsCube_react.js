import { useState } from 'react'
import './App.css'
import TodoApp from './TodoApp'
import Lottery from './Lottery'
import TicketNum from './TicketNum'
import Ticket from './Ticket'

function App() {
  return (
    <>
    <Lottery n={3} winningSum={15} />
    </>
  )
}

export default App
