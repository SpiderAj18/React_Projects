import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/userContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'

function App() {
 
  return (
    <UserContextProvider>
    <h1>This is Ajay Gupta</h1>
    <Login/>
    <Profile></Profile>

    </UserContextProvider>
  )
}

export default App
