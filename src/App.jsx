import { useState } from 'react'
import {BrowserRouter,Routes,Route} from'react-router-dom'
import './App.css'
import Login from './components/Login'
//import Sidenavebar from './components/Sidenavebar'
// import Navebar from './components/Navebar'



function App() {
  

  return (
    <BrowserRouter>   
       <Routes>
      <Route path='/' element={<Login/>}/>
      {/* <Route path='/sidenavebar' element={<Sidenavebar/>}/>
      <Route path='/navebar' element={<Navebar/>} /> */}
     
    </Routes>
    </BrowserRouter>
  )
}

export default App
