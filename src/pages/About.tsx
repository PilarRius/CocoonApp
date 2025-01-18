import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="page" style={{ background: 'var(--right-color)' }}>
      <div className="page-content">
        <h1 style={{ color: 'var(--right-color)', marginBottom: '2rem' }}>About Cocoon</h1>
        <div style={{ color: '#444', lineHeight: '1.6' }}>
          <p>
            Cocoon is a transformative platform designed to help individuals evolve into their best selves. 
            We believe in the power of personal development and the journey of self-improvement.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Our platform offers two main paths:
          </p>
          <ul style={{ marginTop: '1rem', marginLeft: '1.5rem' }}>
            <li><strong>Fix Yourself</strong> - Address and overcome personal challenges</li>
            <li><strong>Improve Yourself</strong> - Enhance your strengths and reach new heights</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            Join us on this journey of transformation and discover your true potential.
          </p>
        </div>
        <Link to="/" style={{ display: 'block', marginTop: '2rem', textAlign: 'center', color: 'var(--right-color)' }}>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default About;