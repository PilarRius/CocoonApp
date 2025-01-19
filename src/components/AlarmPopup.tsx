import React, { useState } from 'react';
import './Popup.css'; // Import the CSS file for styling

interface AlarmPopupProps {
  routineName: string;
  onSave: (time: string, days: string[]) => void;
  onCancel: () => void;
}

const AlarmPopup: React.FC<AlarmPopupProps> = ({ routineName, onSave, onCancel }) => {
  const [time, setTime] = useState('');
  const [days, setDays] = useState<string[]>([]);

  const handleDayChange = (day: string) => {
    setDays(prevDays =>
      prevDays.includes(day) ? prevDays.filter(d => d !== day) : [...prevDays, day]
    );
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Set Alarm for {routineName}</h2>
        <label>
          Time:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
        <div>
          Days:
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
            <label key={day}>
              <input
                type="checkbox"
                checked={days.includes(day)}
                onChange={() => handleDayChange(day)}
              />
              {day}
            </label>
          ))}
        </div>
        <button onClick={() => onSave(time, days)}>Save Alarm</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default AlarmPopup;