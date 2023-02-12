import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './layouts/footer'
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
     <Footer/>
    </div>
  )
}

export default App
