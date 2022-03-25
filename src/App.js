import React from 'react';
import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import Portfolio from './pages/Portfolio';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>

      <Navbar/>

      <Routes>
      <Route path="/" element={<div><Home/></div>}/>
      <Route path="/portfolio" element={<div><Portfolio/></div>}/>
      <Route path="/contact" element={<div><Contact/></div>}/>
      <Route path="*" element={<div><NotFoundPage/></div>}/>
      </Routes>
    </BrowserRouter>
  );
}


