import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';

import '@/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Links from "@/components/Links";
import Loading from '@/components/Loading';
import { Analytics } from '@vercel/analytics/react';

// Lazy load route components
const HeroSection = lazy(() => import('./components/Hero'));
const Threed = lazy(() => import('@/pages/3D'));
const Contact = lazy(() => import('@/pages/Contact'));
const Services = lazy(() => import('./pages/Services'));
const Webdev = lazy(() => import('./pages/Webdev'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/' element={<HeroSection />} />
        <Route path='/webdev' element={<Webdev />} />
        <Route path='/3D' element={<Threed />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Suspense>
    <Links />
    <Analytics />
  </BrowserRouter>
);
