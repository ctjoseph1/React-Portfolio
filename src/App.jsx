import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Header from './components/Header';
import ProjectGallery from './components/ProjectGallery';
import Contact from './components/Contact';

// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';


function App() {
  return (
    <BrowserRouter>
     
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<Projects />} />
        <Route path="/projectgallery/" element={<ProjectGallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
