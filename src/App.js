import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import Booking from './Components/Booking';
import ConfirmedBooking from './Components/ConfirmedBooking';




const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/nav" element={<Nav />} />
      </Routes>
    
  );
};


export default App;
