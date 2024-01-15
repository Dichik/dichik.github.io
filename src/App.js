import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Books from './components/books/Books';
import Projects from './components/projects/Projects';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';


function App() {
  return (
    <Router>
      <div className='app-container'>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/books" element={<Books />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
