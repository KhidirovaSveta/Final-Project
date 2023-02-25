import { useState } from 'react'
import './App.css'
import Footer from './layouts/footer'
import Header from './layouts/header'
import InfoBox from './layouts/header/info'
import Routing from './routes'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <div className="App">
     <InfoBox/>
     <Header/>
     <ToastContainer />

     <Routing/>
     <Footer/>
    </div>
  )
}

export default App
