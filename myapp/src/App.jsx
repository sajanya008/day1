import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import NavBar from './components/NavBar'
import{ Route, Routes } from 'react-router-dom'
import TableGet from './components/TableGet'
import StateBasic from './components/StateBasic'
import Counter from './components/Counter'
import Name from './components/Name'
import Api from './components/Api'
import Product from './components/Product'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/t" element={< TableGet/>} />
      <Route path="/stateBasic" element={<StateBasic/>} />
      <Route path="/counter" element={<Counter/>} />
      <Route path="/name" element={<Name/>} />
      <Route path="/api" element={<Api/>} />
      <Route path="/product" element={<Product/>} />

 </Routes>
 

      <NavBar />
    
      
    </>
  )
}

export default App
