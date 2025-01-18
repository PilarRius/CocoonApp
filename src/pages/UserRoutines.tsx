// filepath: /c:/Users/user/Full-Stack/CocoonApp/src/pages/UserRoutines.tsx
import React from 'react';

const UserRoutines: React.FC = () => {
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
      </div>
    </div>
  );
};

export default UserRoutines;