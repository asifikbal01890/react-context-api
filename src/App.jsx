import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleFrom from './components/SimpleFrom/SimpleFrom'
import StateForm from './components/SimpleFrom/StateForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Vite + React</h1>
     
     {/* <SimpleFrom></SimpleFrom> */}
     <StateForm></StateForm>
    </>
  )
}

export default App
