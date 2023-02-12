import { useState } from 'react'
import './App.css'
import Footer from './layouts/footer'
import Header from './layouts/header'
import InfoBox from './layouts/header/info'
import Routing from './route'

function App() {

  return (
    <div className="App">
     <InfoBox/>
     <Header/>
     <Routing/>
     <Footer/>
    </div>
  )
}

export default App
