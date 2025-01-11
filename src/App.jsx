import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Hero from './components/Hero/Hero'
import TabsProducts from './components/TabsProducts/TabsProducts'

const App = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <TabsProducts/>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    
    </>
  )
}

export default App