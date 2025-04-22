import './App.css';
import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
import Navbars from './navbars';

function App() {
  return (
    <>
      <h1>React Routing</h1>
      <BrowserRouter>
        <Navbars/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
