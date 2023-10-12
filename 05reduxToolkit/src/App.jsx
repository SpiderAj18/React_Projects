import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodos from "./components/AddTodo"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    React with redux 
    <AddTodos></AddTodos>
    
    </>
  )
}

export default App
