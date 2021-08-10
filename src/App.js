import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Abilities from './components/abilities';
import Footer from './components/footer';

function App() {
  return (
    <div>      

      <Navbar/>
      <Hero/>
      <Abilities/>
      <Footer/>
    </div>
  );
}

export default App;
