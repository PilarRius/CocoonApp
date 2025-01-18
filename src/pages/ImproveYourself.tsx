import React from 'react';
import { Link } from 'react-router-dom';

const ImproveYourself: React.FC = () => {
  return (
    <div className="page" style={{ background: 'var(--right-color)' }}>
      <div className="page-content">
        <h1 style={{ color: 'var(--right-color)', marginBottom: '2rem' }}>Improve Yourself</h1>
        <div style={{ color: '#444', lineHeight: '1.6' }}>
          <p>
            Welcome to your personal growth journey. Here, we focus on enhancing your strengths and 
            developing new skills to help you reach new heights in life.
          </p>
          <h2 style={{ color: 'var(--right-color)', margin: '1.5rem 0 1rem' }}>Growth Areas</h2>
          <ul style={{ marginLeft: '1.5rem' }}>
            <li>Personal Development</li>
            <li>Goal Setting & Achievement</li>
            <li>Leadership Skills</li>
            <li>Communication</li>
            <li>Time Management</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            Take your next step towards excellence and unlock your full potential.
          </p>
        </div>
        <Link to="/" style={{ display: 'block', marginTop: '2rem', textAlign: 'center', color: 'var(--right-color)' }}>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ImproveYourself;