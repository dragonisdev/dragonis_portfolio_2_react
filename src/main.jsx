import React from 'react';
import ReactDOM from 'react-dom/client';

import '@/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroSection from './components/Hero';
import Navbar from "@/components/Navbar";
import Links from "@/components/Links";
import Threed from "@/pages/3D";
import Contact from "@/pages/Contact";
import Services from './pages/Services';
import Webdev from './pages/Webdev';
import { Analytics } from '@vercel/analytics/react';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path='/' element={<HeroSection/>}></Route>
      <Route path='/webdev' element={<Webdev/>}></Route>
      <Route path='/3D' element={<Threed/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      
   

    </Routes>
    <Links/>
  </BrowserRouter>,
)
