import { useState } from 'react'
import './App.css'
import Form from './components/Form'

function App() {

  return (
    <>
    <h1>CV Application</h1>
    <div className='formsDiv'>
      <Form type="personal"/>
      <Form type="work"/>
      <Form type="education"/>
    </div>
    <div className='curriculumDiv'>
      <h2>Curriculum</h2>
    </div>
    </>
  )
}

export default App
