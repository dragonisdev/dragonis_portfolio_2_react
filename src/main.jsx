import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';

import '@/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Links from "@/components/Links";
import Loading from '@/components/Loading';
import { Analytics } from '@vercel/analytics/react';

// Preload critical components
const HeroSection = lazy(() => import('./components/Hero'));

// Lazy load non-critical route components with prefetch
const Threed = lazy(() => import(/* webpackPrefetch: true */ '@/pages/3D'));
const Contact = lazy(() => import(/* webpackPrefetch: true */ '@/pages/Contact'));
const Services = lazy(() => import(/* webpackPrefetch: true */ './pages/Services'));
const Webdev = lazy(() => import(/* webpackPrefetch: true */ './pages/Webdev'));

// Create a loading boundary component
const LoadingBoundary = ({ children }) => (
  <Suspense fallback={<Loading />}>
    {children}
  </Suspense>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <LoadingBoundary>
      <Routes>
        <Route path='/' element={<HeroSection />} />
        <Route path='/webdev' element={<Webdev />} />
        <Route path='/3D' element={<Threed />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </LoadingBoundary>
    <Links />
    <Analytics />
  </BrowserRouter>
);
