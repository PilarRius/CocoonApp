import React from 'react';
import { useNavigate } from 'react-router-dom';

const FixYourself: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', padding: '20px' }}>
      <div style={{ flex: 1, marginRight: '20px' }}>
        <iframe 
          src="https://chatbolt.ai/iframe/b6ea6253-d4bf-4d2a-9245-b46ab4650ab0" 
          width="100%" 
          height="600" 
          frameBorder="0"
        ></iframe>
      </div>
      <div style={{ flex: 1 }}>
        <h1>Fix Yourself</h1>
        <p>Start your transformation journey.</p>
        <button onClick={() => navigate('/')}>Back Home</button>
      </div>
    </div>
  );
};

export default FixYourself;