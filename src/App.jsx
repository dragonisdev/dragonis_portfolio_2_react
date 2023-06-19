import { useState } from "react";
import HeroSection from "@/components/Hero";
import '@/App.css'
import Navbar from "@/components/Navbar"
import Links from "@/components/Links"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Contact from "@/pages/Contact";

function App() {
  return (
    <div className="App">
    <Router className="container">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HeroSection />} />
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
      <Links/>
    </Router>
    </div>
  );
}
export default App;
