// filepath: /c:/Users/user/Full-Stack/CocoonApp/src/pages/Login.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hardcoded user credentials
    const hardcodedUser = {
      email: 'testuser@example.com',
      password: 'password123'
    };

    if (email === hardcodedUser.email && password === hardcodedUser.password) {
      console.log('Login successful');
      navigate('/user-routines');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="page" style={{ background: 'var(--left-color)' }}>
      <div className="page-content">
        <h1 style={{ marginBottom: '2rem', color: 'var(--left-color)' }}>Login to Cocoon</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem',
              }}
            />
          </div>
          <div>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem',
              }}
            />
          </div>
          <button type="submit" style={{ padding: '0.5rem', background: 'var(--left-color)', color: '#fff' }}>Login</button>
        </form>
        <p style={{ marginTop: '1rem' }}>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;