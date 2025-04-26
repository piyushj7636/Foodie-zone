import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/Routes/Contact.jsx';
import Home from './components/Routes/Home.jsx';
import About from './components/Routes/About.jsx';
import AOS from 'aos'
import 'aos/dist/aos.css';

const App = () => {

  useEffect(()=>{
    AOS.init({
      offset:100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100
    });
    AOS.refresh();
  }, [])
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;