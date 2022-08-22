import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
   const increment = () => {
    setCount(count + 1)
  }
   
  return (
    <>
    <h1>Hallo dunia</h1>
    <button onClick={increment}>
      {count}
    </button>
    </>
  )
}

export default App
