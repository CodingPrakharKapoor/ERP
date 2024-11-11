import { useState } from 'react'
import './App.css'
import ERPMain from './ERPMain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ERPMain  />
    </>
  )
}

export default App
