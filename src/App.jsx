import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route, useLocation } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import TopBanquets from './components/TopBanquets'

function App() {
  return (
    <BrowserRouter >
    
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/top-banquets" element={<TopBanquets />} />
      </Routes>
      
    </BrowserRouter>
  )
  
}

export default App
