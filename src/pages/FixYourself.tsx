import React from 'react';
import { Link } from 'react-router-dom';

const FixYourself: React.FC = () => {
  return (
    <div className="page" style={{ background: 'var(--left-color)' }}>
      <div className="page-content">
        <h1 style={{ color: 'var(--left-color)', marginBottom: '2rem' }}>Fix Yourself</h1>
        <div style={{ color: '#444', lineHeight: '1.6' }}>
          <p>
            Welcome to your personal transformation journey. Here, we focus on addressing and overcoming challenges 
            that may be holding you back from reaching your full potential.
          </p>
          <h2 style={{ color: 'var(--left-color)', margin: '1.5rem 0 1rem' }}>Key Areas</h2>
          <ul style={{ marginLeft: '1.5rem' }}>
            <li>Mental Health & Wellness</li>
            <li>Emotional Intelligence</li>
            <li>Stress Management</li>
            <li>Personal Boundaries</li>
            <li>Self-Awareness</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            Start your journey today and take the first step towards a better you.
          </p>
        </div>
        <Link to="/" style={{ display: 'block', marginTop: '2rem', textAlign: 'center', color: 'var(--left-color)' }}>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default FixYourself;