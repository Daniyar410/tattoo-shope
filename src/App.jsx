import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import AboutUs from './pages/AboutUs'
import Entrance from './pages/Entrance'
import LoginMax from './pages/LoginMax'

const App = () => {
  return (
    <>
    <Header/>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about-us' element={<AboutUs/>} />
      <Route path='/entrance' element={<Entrance/>} />
      <Route path='/login' element={<LoginMax/>} />
    </Routes>


    <Footer/>
    
    </>
  )
}

export default App