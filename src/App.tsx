import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<div>Products Page</div>} />
        <Route path="/sale" element={<div>Sale Page</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;