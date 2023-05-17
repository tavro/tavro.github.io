import React, { useState, useEffect } from 'react';

import Home from './pages/Home'
import About from './pages/About'

import './App.css';

import {
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
