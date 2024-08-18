import { useState } from 'react'
import './App.css'
import PersonalSection from './components/PersonalSection'
import Curriculum from './components/Curriculum'

function App() {

  function print() {
    window.print();
  }

  return (
    <>
      <header>
        <h1>CV Application</h1>
        <button className='btn-primary' onClick={print}>PRINT</button>
      </header>
     <Curriculum>
      <PersonalSection />
     </Curriculum>
    </>
  )
}

export default App
