import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './layouts/header'
import InfoBox from './layouts/header/info'
import Home from './pages/home'

function App() {

  return (
    <div className="App">
     <InfoBox/>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes>
    </div>
  )
}

export default App
