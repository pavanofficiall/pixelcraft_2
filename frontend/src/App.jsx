import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Footer from './components/footer';
import Dashboard from './pages/Dashboard';
import Payment from './components/Payment';

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;