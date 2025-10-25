import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h2 className='text-4xl font-bold text-blue-600'>HNG STAGE TWO TASK</h2>
     <p className='text-3xl font-semibold text-black'>Building a ticketing app with 3 frameworks</p>
    </>
  )
}

export default App
