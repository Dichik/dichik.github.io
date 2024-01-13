import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/About';
import Experience from './components/Experience';
import Books from './components/Books';
import Projects from './components/Projects';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li><Link to="/">About</Link></li>
              <li><Link to="/experience">Experience</Link></li>
              <li><Link to="/books">Books</Link></li>
              <li><Link to="/projects">Projects</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/books" element={<Books />} />
          <Route path="/projects" element={<Projects />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
