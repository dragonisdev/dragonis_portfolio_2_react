import React from 'react'
import ReactDOM from 'react-dom/client'

import '@/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeroSection from './components/Hero'
import Navbar from "@/components/Navbar"
import Links from "@/components/Links"
import Threed from "@/pages/3D"
import Contact from "@/pages/Contact"
import Samples from './pages/Samples'
import Webdev from './pages/Webdev'
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar/>

          <Routes>
            <Route path='/' element={<HeroSection/>}></Route>
            <Route path='/Webdev' element={<Webdev/>}></Route>
            <Route path='/3D' element={<Threed/>}></Route>
            <Route path='/Contact' element={<Contact/>}></Route>
            <Route path='/Samples' element={<Samples/>}></Route>
        

          </Routes>
        <Links/>
      </BrowserRouter>,
    </div>
  );
}
export default App;
