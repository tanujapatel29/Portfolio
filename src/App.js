
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Service from './components/service/Service';
import Home from './components/project/Home';
import React from 'react';

function App() {
  return (
    <div className="App">
    <Header />
    <div id="home">
      <Home />
    </div>
    <div id="about">
      <About />
    </div>
    <div id="service">
      <Service />
    </div>
    <div id="contact">
      <Contact />
    </div>
    <Footer />
  </div>
  );
}

export default App;
