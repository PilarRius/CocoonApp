import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import About from './pages/About';
import FixYourself from './pages/FixYourself';
import ImproveYourself from './pages/ImproveYourself';

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
      <header>
        <Link to="/" className="logo">Cocoon</Link>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/fix-yourself" element={<FixYourself />} />
        <Route path="/improve-yourself" element={<ImproveYourself />} />
      </Routes>
    </Router>
  );
};

export default App;