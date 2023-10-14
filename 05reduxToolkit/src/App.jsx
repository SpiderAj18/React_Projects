import { useState } from 'react'
import './App.css'
import AddTodos from "./components/AddTodo"
import Todos from "./components/Todos"

function App() {
  
  return (
    <>
    <h1 className='font-bold text-blue-950 text-xl'>React with redux</h1>
    <AddTodos></AddTodos>
    <Todos></Todos>
    
    </>
  )
}

export default App
