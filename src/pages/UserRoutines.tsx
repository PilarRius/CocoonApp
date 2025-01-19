import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routine } from '../types';
import AlarmPopup from '../components/AlarmPopup';
import VotePopup from '../components/VotePopup';

const UserRoutines: React.FC = () => {
  const [routines, setRoutines] = useState<Routine[]>([]);
  const [showAlarmPopup, setShowAlarmPopup] = useState<boolean>(false);
  const [showVotePopup, setShowVotePopup] = useState<boolean>(false);
  const [selectedRoutine, setSelectedRoutine] = useState<Routine | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedRoutines = JSON.parse(localStorage.getItem('userRoutines') || '[]');
    setRoutines(storedRoutines);
  }, []);

  const handleSetAlarm = (routine: Routine) => {
    setSelectedRoutine(routine);
    setShowAlarmPopup(true);
  };

  const handleVoteEffectiveness = (routine: Routine) => {
    setSelectedRoutine(routine);
    setShowVotePopup(true);
  };

 const handleRemoveRoutine = (routineToRemove: Routine) => {
    console.log('Removing routine:', routineToRemove);
    const updatedRoutines = routines.filter(routine => 
      routine._id !== routineToRemove._id
    );
    console.log('Updated routines:', updatedRoutines);
    setRoutines(updatedRoutines);
    localStorage.setItem('userRoutines', JSON.stringify(updatedRoutines));
  };

  const handleSaveAlarm = (time: string, days: string[]) => {
    if (selectedRoutine) {
      const updatedRoutines = routines.map(routine => {
        if (routine._id === selectedRoutine._id) {
          return { ...routine, alarm: { time, days } };
        }
        return routine;
      });
      setRoutines(updatedRoutines);
      localStorage.setItem('userRoutines', JSON.stringify(updatedRoutines));
      console.log('Alarm saved for', selectedRoutine.name, 'at', time, 'on', days);
    }
    setShowAlarmPopup(false);
  };

  const handleSaveVote = (rating: number) => {
    console.log('Vote saved for', selectedRoutine?.name, 'with rating', rating);
    setShowVotePopup(false);
  };

  const calculateDaysDoingRoutine = (routine: Routine) => {
    return Math.floor(Math.random() * 30);
  };

  return (
    <div className="page">
      <div className="page-content">
        <h1>Your Routines</h1>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {routines.map((routine, index) => (
            <li key={routine._id} style={{ backgroundColor: index % 2 === 0 ? '#f0f0f0' : '#d0ffd0', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
              <h3>{routine.name}</h3>
              <p>{routine.description}</p>
              <p>Days doing this routine: {calculateDaysDoingRoutine(routine)}</p>
              <button onClick={() => handleSetAlarm(routine)}>Set Alarm</button>
              <button onClick={() => handleVoteEffectiveness(routine)}>Vote Effectiveness</button>
              <button onClick={() => handleRemoveRoutine(routine)}>Remove</button>
            </li>
          ))}
        </ul>
        <button onClick={() => navigate('/')}>Back Home</button>
      </div>

      {showAlarmPopup && selectedRoutine && (
        <AlarmPopup
          routineName={selectedRoutine.name}
          onSave={handleSaveAlarm}
          onCancel={() => setShowAlarmPopup(false)}
        />
      )}

      {showVotePopup && selectedRoutine && (
        <VotePopup
          routineName={selectedRoutine.name}
          onSave={handleSaveVote}
          onCancel={() => setShowVotePopup(false)}
        />
      )}
    </div>
  );
};

export default UserRoutines;