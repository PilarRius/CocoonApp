
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import About from './pages/About';
import FixYourself from './pages/FixYourself';
import ImproveYourself from './pages/ImproveYourself';
import UserRoutines from './pages/UserRoutines';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleHover = (side: 'left' | 'right') => {
    const otherSide = side === 'left' ? 'right' : 'left';
    document.querySelector(`.split.${side}`)?.classList.add('expand');
    document.querySelector(`.split.${otherSide}`)?.classList.add('shrink');
  };

  const resetHover = () => {
    document.querySelectorAll('.split').forEach((el) => {
      el.classList.remove('expand', 'shrink');
    });
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo-container">
          <img src="/images/Cocoon.png" alt="Cocoon Logo" className="logo-img" />
          <Link to="/" className="logo">Cocoon</Link>
        </div>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <div 
        className="split left"
        onMouseEnter={() => handleHover('left')}
        onMouseLeave={resetHover}
        onClick={() => navigate('/fix-yourself')}
      >
        <div className="content">
          <h1>Fix Yourself</h1>
          <p>Start your transformation journey.</p>
        </div>
      </div>
      <div 
        className="split right"
        onMouseEnter={() => handleHover('right')}
        onMouseLeave={resetHover}
        onClick={() => navigate('/improve-yourself')}
      >
        <div className="content">
          <h1>Improve Yourself</h1>
          <p>Achieve your goals and thrive.</p>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/fix-yourself" element={<FixYourself />} />
        <Route path="/improve-yourself" element={<ImproveYourself />} />
        <Route path="/user-routines" element={<UserRoutines />} />
      </Routes>
    </Router>
  );
};

export default App;