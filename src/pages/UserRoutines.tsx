import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserRoutines: React.FC = () => {
  const navigate = useNavigate();

  const routines = [
    { id: 1, name: 'Morning Routine' },
    { id: 2, name: 'Workout Routine' },
    { id: 3, name: 'Evening Routine' },
  ];

  return (
    <div className="page">
      <div className="page-content">
        <h1>Your Routines</h1>
        <ul>
          {routines.map(routine => (
            <li key={routine.id}>{routine.name}</li>
          ))}
        </ul>
        <button onClick={() => navigate('/')}>Back Home</button>
      </div>
    </div>
  );
};

export default UserRoutines;