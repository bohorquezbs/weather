import { useState } from 'react'
import './App.css'
import {Fondo} from './components/Fondo'
import Selection from './components/Selection'

function App() {

  return (
    <>
      <div className='md:flex'>
        <Fondo />
        <Selection />
      </div>
    </>
  )
}

export default App
